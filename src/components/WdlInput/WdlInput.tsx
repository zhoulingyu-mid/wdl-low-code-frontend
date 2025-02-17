import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { getInitValue } from 'src/utils/wdlUtils';
import { Wdl_typeContext } from 'src/WdlV1_1/WdlV1_1Parser';

interface WdlInputProps {
  wdlType: Wdl_typeContext;
  structDefinitions: Record<string, Record<string, Wdl_typeContext>>;
  value: unknown;
  onChange: (value: unknown) => void;
}

const WdlInput: React.FC<WdlInputProps> = ({ wdlType, structDefinitions, value, onChange }) => {
  const baseTypeNode = wdlType.type_base().STRING()
    || wdlType.type_base().FILE()
    || wdlType.type_base().BOOLEAN()
    || wdlType.type_base().INT()
    || wdlType.type_base().FLOAT()
    || wdlType.type_base().array_type()?.ARRAY()
    || wdlType.type_base().map_type()?.MAP()
    || wdlType.type_base().Identifier();

  const baseType = baseTypeNode.getText();
  const optional = wdlType.OPTIONAL();

  if (baseType === 'String') {
    return (
      <div>
        <input type='text' value={value == null ? '' : (value as string)} placeholder={value == null ? '<null>' : '<empty>'}
          onChange={ev => onChange(ev.target.value)}
        />
        {optional && value != null && <Button onClick={() => onChange(null)}>use null</Button>}
      </div>
    );
  };
  if (baseType === 'File') {
    return (
      <div>
        <input type='text' value={value == null ? '' : (value as string)} placeholder={value == null ? '<null>' : '<empty>'}
          onChange={ev => onChange(ev.target.value)}
        />
        {optional && value != null && <Button onClick={() => onChange(null)}>use null</Button>}
      </div>
    );
  };
  if (baseType === 'Int') {
    return (
      <div>
        <input value={value == null ? '' : (value as number)} placeholder={value == null ? '<null>' : ''}
          onChange={ev => {
            if (ev.target.value === '') {
              onChange(0);
            }
            const newValue = parseInt(ev.target.value);
            if (isNaN(newValue)) {
              onChange(0);
            }
            else {
              onChange(parseInt(ev.target.value))
            };
          }}
        />
        {optional && value != null &&
          <Button size='sm' onClick={() => onChange(null)}>use null</Button>
        }
      </div>
    );
  };
  if (baseType === 'Float') {
    return (
      <div>
        <input value={value == null ? '' : (value as number)} placeholder={value == null ? '<null>' : ''}
          onChange={ev => {
            if (ev.target.value === '') {
              onChange(0);
            }
            onChange(parseFloat(ev.target.value));
          }}
        />
        {optional && value != null &&
          <Button size='sm'
            onClick={() => onChange(null)}
          >
            use null
          </Button>
        }
      </div>
    );
  };
  if (baseType === 'Boolean') {
    return (
      <div>
        <Button
          size='sm'
          active
          onClick={() => {
            onChange(true);
          }}
        >
          true
        </Button>
        <Button
          size='sm'
          onClick={() => {
            onChange(false);
          }}
        >
          false
        </Button>
        {optional && value != null &&
          <Button
            size='sm'
            onClick={() => onChange(null)}>
            use null
          </Button>
        }
      </div>
    );
  };
  if (baseType === 'Array') {
    if (isArray(value)) {
      return (
        <div>
          {value.map((v, i) =>
            <div key={i}>
              <b>{i}</b>
              <div className='ms-3'>
                <WdlInput
                  wdlType={wdlType.type_base().array_type().wdl_type()}
                  structDefinitions={structDefinitions}
                  value={v}
                  onChange={(v) => {
                    const newValue = [...value];
                    newValue[i] = v;
                    onChange(newValue);
                  }}
                />
                <button
                  onClick={() => {
                    const newValue = [...value];
                    newValue.splice(i, 1);
                    onChange(newValue);
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              onChange([
                ...value as ReadonlyArray<unknown>,
                getInitValue(
                  wdlType.type_base().array_type().wdl_type(),
                  structDefinitions,
                  undefined,
                  new Set()
                )
              ])
            }}
          >
            add
          </button>
        </div>
      );
    }
  }
  if (baseType === 'Map') {
    if (isMap(value)) {
      return (
        <div>
          {Object.entries(value).map(([k, v], i) =>
            <Stack key={i} direction='horizontal'>
              <div>
                <WdlInput
                  wdlType={wdlType.type_base().map_type().wdl_type(0)}
                  structDefinitions={structDefinitions}
                  value={k}
                  onChange={(newK) => {
                    const newValue = { ...value };
                    delete newValue[k];
                    newValue[String(newK)] = v;
                    onChange(newValue);
                  }}
                />
              </div>
              <div>
                <WdlInput
                  wdlType={wdlType.type_base().map_type().wdl_type(1)}
                  structDefinitions={structDefinitions}
                  value={v}
                  onChange={(newV) => {
                    const newValue = { ...value };
                    newValue[k] = newV;
                    onChange(newValue);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  const newValue = { ...value };
                  delete newValue[k];
                  onChange(newValue);
                }}
              >
                remove
              </button>
            </Stack>
          )}

          <button
            onClick={() => {
              const k = getInitValue(
                wdlType.type_base().map_type().wdl_type(0),
                structDefinitions,
                undefined,
                new Set([...Object.keys(value)]),
              );
              const v = getInitValue(
                wdlType.type_base().map_type().wdl_type(1),
                structDefinitions,
                undefined,
                new Set(),
              );
              if (!('undefined' in value)) {
                onChange({
                  ...value,
                  [k as string]: v
                })
              }
            }}
          >
            add
          </button>
        </div>
      );
    }
    else if (value == null) {
      return (
        <div>
          <button
            onClick={() => {
              onChange({})
            }}
          >
            not null
          </button>
        </div >
      );
    }
    else {
      throw new Error('Map or undefined value expected');
    }
  }

  // here, baseType is a struct identifier
  if (baseType in structDefinitions) {
    if (isMap(value)) {
      return (
        <div>
          {Object.entries(structDefinitions[baseType]).map(([k, wdlType]) =>
            <div key={k}>
              <b>{k}</b>
              <div className='ms-3'>
                <WdlInput
                  wdlType={wdlType}
                  structDefinitions={structDefinitions}
                  value={value[k]}
                  onChange={(newV) => {
                    const newValue = { ...value };
                    newValue[k] = newV;
                    onChange(newValue);
                  }}
                />
              </div>
            </div>
          )}
        </div >
      );
    }
    else if (value == null) {
      return (
        <div>
          <button
            onClick={() => {
              const struct: Record<string, unknown> = {};
              for (const key of Object.keys(structDefinitions[baseType])) {
                struct[key] = null;
              }
              onChange(struct);
            }}
          >
            not null
          </button>
        </div >
      );
    }
    else {
      throw new Error('Struct or undefined value expected');
    }
  }

  return '...'
}


function isArray(value: unknown): value is ReadonlyArray<unknown> {
  return Array.isArray(value);
}

function isMap(value: unknown): value is Record<string, unknown> {
  return value != null && !Array.isArray(value) && typeof value === 'object';
}


export default WdlInput;