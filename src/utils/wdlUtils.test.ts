import { CharStreams, CommonTokenStream } from 'antlr4';
import WdlV1_1Lexer from 'src/WdlV1_1/WdlV1_1Lexer';
import WdlV1_1Parser from 'src/WdlV1_1/WdlV1_1Parser';

import { evaluateExpression, getDocument, getInitValue, getStructDefinitions, getWorkflowInputDecls } from './wdlUtils';


const SAMPLE_WDL_CONTENT = `
version 1.1

struct MyStruct {
  String? s
  Int i
}

workflow my_workflow {
  input {
    String s
    Int i
    Float f
    Boolean? b = false
    File? file  # Renamed from 'f' to 'file' to avoid name collision with Float 'f'

    Array[Int]+ array_of_int
    Map[String, Int] map_string_to_int
    Pair[File, File] pair_of_file_and_file

    MyStruct my_struct
  }
}
`

describe('getWorkflowInputDecls', () => {
  test('gets declarations in workflow input section', () => {
    const document = getDocument(SAMPLE_WDL_CONTENT);
    const wdlInputDecls = getWorkflowInputDecls(document);

    expect(wdlInputDecls.length).toBe(9);
  })
})

describe('getStructDefinitions', () => {
  test('gets struct in workflow input section', () => {
    const document = getDocument(SAMPLE_WDL_CONTENT);
    const structDefinitions = getStructDefinitions(document);

    expect(Object.keys(structDefinitions).length).toBe(1);
    expect([...Object.keys(structDefinitions['MyStruct'])])
      .toEqual(['s', 'i']);
    expect(
      [...Object.values(structDefinitions['MyStruct'])].map(
        i => i.getText()
      )
    ).toEqual(['String?', 'Int']);
  })
})

describe('evaluateExpression', () => {
  ([
    ['"a string"', 'a string'],
    ['1', 1],
    ['1.2', 1.2],
    ['true', true],
    ['false', false],
  ] as const).map(([exprString, expectedValue]) => {
    test('evaluates primitives correctly', () => {
      const inputStream = CharStreams.fromString(exprString);
      const lexer = new WdlV1_1Lexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new WdlV1_1Parser(tokenStream);
      const expr = parser.expr()

      const value = evaluateExpression(
        expr
      )

      expect(value).toBe(expectedValue);
    })
  });
})


describe('getInitValue', () => {
  ([
    ['String', 'text'],
    ['Int', 0],
    ['Float', 0],
    ['Boolean', false],
    ['File', null]
  ] as const).map(([typeString, expectedInitValue]) => {
    test('gets initial value for primitive types', () => {
      const inputStream = CharStreams.fromString(typeString);
      const lexer = new WdlV1_1Lexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new WdlV1_1Parser(tokenStream);
      const wdlType = parser.wdl_type()

      const initValue = getInitValue(
        wdlType,
        {},
        undefined,
        new Set(),
      )

      expect(initValue).toBe(expectedInitValue);
    })
  });
})
