// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: TS6133
import React from 'react';
import { render } from '@testing-library/react';
import { CharStreams, CommonTokenStream } from 'antlr4';
import WdlInput from 'src/components/WdlInput/WdlInput';
import WdlV1_1Lexer from 'src/WdlV1_1/WdlV1_1Lexer';
import WdlV1_1Parser from 'src/WdlV1_1/WdlV1_1Parser';

describe('WdlInput', () => {
  ([
    ['String', 'a string'],
    ['Int', 1],
    ['Float', 1.2],
  ] as const).map(([typeString, value]) => {
    test('renders text input for wdl String, Int, Float', () => {
      const inputStream = CharStreams.fromString(typeString);
      const lexer = new WdlV1_1Lexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new WdlV1_1Parser(tokenStream);
      const wdlType = parser.wdl_type()
      const handleChange = jest.fn();

      const element = render(
        <WdlInput
          wdlType={wdlType}
          structDefinitions={{}}
          value={value}
          onChange={handleChange}
        />
      );

      expect(element.queryAllByRole('textbox').length).toBe(1);
      expect(element.queryAllByRole('button').length).toBe(0);
    });
  });


  ([
    true, false
  ] as const).map((boolValue) => {
    test('renders Buttons for wdl Boolean', () => {
      const inputStream = CharStreams.fromString('Boolean');
      const lexer = new WdlV1_1Lexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new WdlV1_1Parser(tokenStream);
      const wdlType = parser.wdl_type()
      const handleChange = jest.fn();

      const element = render(
        <WdlInput
          wdlType={wdlType}
          structDefinitions={{}}
          value={boolValue}
          onChange={handleChange}
        />
      );

      expect(element.queryAllByRole('button').length).toBe(2);
      expect(element.queryAllByRole('button')[0].textContent).toBe('true');
      expect(element.queryAllByRole('button')[1].textContent).toBe('false');

      expect(
        (element.queryAllByRole('button')[0] as HTMLButtonElement).disabled
      ).toBe(boolValue === true);
      expect(
        (element.queryAllByRole('button')[1] as HTMLButtonElement).disabled
      ).toBe(boolValue === false);
    });
  });

  ([
    ['String?', 'a string'],
    ['Int?', 1],
    ['Float?', 1.2],
  ] as const).map(([typeString, value]) => {
    test('renders text input with a button for setting null for wdl String?, Int?, Float?', () => {
      const inputStream = CharStreams.fromString(typeString);
      const lexer = new WdlV1_1Lexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new WdlV1_1Parser(tokenStream);
      const wdlType = parser.wdl_type()
      const handleChange = jest.fn();

      const element = render(
        <WdlInput
          wdlType={wdlType}
          structDefinitions={{}}
          value={value}
          onChange={handleChange}
        />
      );

      expect(element.queryAllByRole('textbox').length).toBe(1);
      expect(element.queryAllByRole('button').length).toBe(1);
      expect(element.getByRole('button').textContent).toBe('use null');
    });
  });

  test('renders text input for wdl Array', () => {
    const inputStream = CharStreams.fromString('Array[Int]');
    const lexer = new WdlV1_1Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new WdlV1_1Parser(tokenStream);
    const wdlType = parser.wdl_type()
    const handleChange = jest.fn();

    const element = render(
      <WdlInput
        wdlType={wdlType}
        structDefinitions={{}}
        value={[]}
        onChange={handleChange}
      />
    );

    expect(element.queryAllByRole('button').length).toBe(1);
    expect(element.getByRole('button').textContent).toBe('add');
  });

  test('renders text input for wdl Map', () => {
    const inputStream = CharStreams.fromString('Map[String, Int]');
    const lexer = new WdlV1_1Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new WdlV1_1Parser(tokenStream);
    const wdlType = parser.wdl_type()
    const handleChange = jest.fn();

    const element = render(
      <WdlInput
        wdlType={wdlType}
        structDefinitions={{}}
        value={{}}
        onChange={handleChange}
      />
    );

    expect(element.queryAllByRole('button').length).toBe(1);
    expect(element.getByRole('button').textContent).toBe('add');
  });


  test('renders inputs for wdl MyStruct', () => {
    const myStructString = [
      'struct MyStruct {',
      '  String? s',
      '  Int i',
      '}',
    ].join('\n');
    const structInputStream = CharStreams.fromString(myStructString);
    const structLexer = new WdlV1_1Lexer(structInputStream);
    const structTokenStream = new CommonTokenStream(structLexer);
    const structParser = new WdlV1_1Parser(structTokenStream);
    const struct = structParser.struct()

    const inputStream = CharStreams.fromString('MyStruct');
    const lexer = new WdlV1_1Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new WdlV1_1Parser(tokenStream);
    const wdlType = parser.wdl_type()

    const handleChange = jest.fn();

    const element = render(
      <WdlInput
        wdlType={wdlType}
        structDefinitions={{
          'MyStruct': {
            's': struct.unbound_decls(0).wdl_type(),
            'i': struct.unbound_decls(1).wdl_type(),
          }
        }}
        value={{
          's': 'a string',
          'i': 123,
        }}
        onChange={handleChange}
      />
    );

    expect(element.queryAllByRole('textbox').length).toBe(2);
    expect((element.queryAllByRole('textbox')[0] as HTMLInputElement).value).toBe('a string');
    expect((element.queryAllByRole('textbox')[1] as HTMLInputElement).value).toBe('123');
  });
});