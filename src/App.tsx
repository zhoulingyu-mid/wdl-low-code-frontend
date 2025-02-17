import { useState, useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { evaluateExpression, getDocument, getInitValue, getStructDefinitions, getWorkflowInputDecls } from 'src/utils/wdlUtils';
import WdlInput from 'src/components/WdlInput/WdlInput';
import { Bound_declsContext, Unbound_declsContext, Wdl_typeContext } from 'src/WdlV1_1/WdlV1_1Parser';
import { Button } from 'react-bootstrap';

function App() {
  const [wdlContent, setWdlContent] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, unknown> | null>(null);

  const onDrop = useCallback((acceptedFiles: ReadonlyArray<File>) => {
    // Only process the first file dropped
    if (acceptedFiles.length !== 1) {
      return;
    }
    const file = acceptedFiles[0];
    if (file.name.endsWith('.wdl')) {
      const reader = new FileReader();
      reader.onload = () => {
        setWdlContent(reader.result as string);
        setForm(null);
      };
      reader.readAsText(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const [workflowInputDecls, structDefinitions] = useMemo(
    () => {
      if (wdlContent == null) {
        return [[], {}];
      }
      const wdlDocument = getDocument(wdlContent);
      const workflowInputDecls = getWorkflowInputDecls(wdlDocument);
      const structDefinitions = getStructDefinitions(wdlDocument);
      return [workflowInputDecls, structDefinitions]
    },
    [wdlContent]
  );

  const inputs = useMemo(
    () => {
      const inputs: Record<string, Wdl_typeContext> = {};
      for (const wdlInputDecl of workflowInputDecls) {
        inputs[wdlInputDecl.Identifier().getText()] = wdlInputDecl.wdl_type();
      }
      return inputs;
    },
    [workflowInputDecls]
  );

  const defaultForm = useMemo(
    () => {
      const defaultForm: Record<string, unknown> = {};
      for (const wdlInputDecl of workflowInputDecls) {
        if (wdlInputDecl instanceof Bound_declsContext) {
          defaultForm[wdlInputDecl.Identifier().getText()] = getInitValue(
            wdlInputDecl.wdl_type(),
            structDefinitions,
            evaluateExpression(wdlInputDecl.expr()),
            new Set()
          );
        }
        if (wdlInputDecl instanceof Unbound_declsContext) {
          defaultForm[wdlInputDecl.Identifier().getText()] = getInitValue(
            wdlInputDecl.wdl_type(),
            structDefinitions,
            undefined,
            new Set()
          );
        }
      }
      return defaultForm;
    },
    [workflowInputDecls, structDefinitions]
  );

  const formTmp = form || defaultForm;

  return (
    <>
      <div
        {...getRootProps()}
        className='App-top'
        style={{
          border: '2px dashed gray',
          padding: '20px',
          textAlign: 'center',
          margin: '20px',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag and drop a text file here, or click to select one</p>
        )}
      </div>
      <div className='App-main'>
        <div>
          {Object.entries(inputs).map(([name, wdlType]) =>
            <div key={name}>
              <strong>{name} ({wdlType.getText()})</strong>
              {defaultForm[name] !== undefined &&
                <Button
                  onClick={() => {
                    const newForm = {
                      ...formTmp,
                      [name]: defaultForm[name]
                    }
                    setForm(newForm);
                  }}
                >
                  use default value
                </Button>
              }
              <div className='ms-3'>
                <WdlInput
                  wdlType={wdlType}
                  structDefinitions={structDefinitions}
                  value={formTmp[name]}
                  onChange={(newValue) => {
                    const newForm = {
                      ...formTmp,
                      [name]: newValue
                    }
                    setForm(newForm);
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <code>
            <pre>
              {JSON.stringify(formTmp, null, 2)}
            </pre>
          </code>
        </div>
      </div >
    </>
  );
};

export default App
