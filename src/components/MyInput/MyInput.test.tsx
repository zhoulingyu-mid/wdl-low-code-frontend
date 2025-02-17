// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: TS6133
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyInput from './MyInput';



describe('MyInput', () => {
  test('initializes with init value', () => {
    const handleCommit = jest.fn();
    // allow 0-9 and '.' only
    const allowedRegex = /[0-9.]/;
    const element = render(
      <MyInput value='123' onCommit={handleCommit} allowedRegex={allowedRegex} />
    );
    const input = element.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('123');
  });

  test('stages value without commit', async () => {
    const user = userEvent.setup();
    const handleCommit = jest.fn();
    // allow 0-9 and '.' only
    const allowedRegex = /[0-9.]/;
    const element = render(
      <MyInput value='124' onCommit={handleCommit} allowedRegex={allowedRegex} />
    );
    const input = element.getByRole('textbox') as HTMLInputElement;
    // add a . and 4 at the end of the value
    await user.type(input, '.3', {
      initialSelectionStart: 2,
      initialSelectionEnd: 2
    });

    expect(input.value).toBe('12.34');
    expect(handleCommit).not.toHaveBeenCalled();
  });

  test('commits value on blur', async () => {
    const user = userEvent.setup();
    const handleCommit = jest.fn();
    // allow 0-9 and '.' only
    const allowedRegex = /[0-9.]/;
    const element = render(
      <MyInput value='123' onCommit={handleCommit} allowedRegex={allowedRegex} />
    );
    const input = element.getByRole('textbox') as HTMLInputElement;
    // add a . and 4 at the end of the value
    await user.type(input, '.4');

    input.blur();
    expect(handleCommit).toHaveBeenCalledWith('123.4');
  });

  test('commits value on enter', async () => {
    const user = userEvent.setup();
    const handleCommit = jest.fn();
    // allow 0-9 and '.' only
    const allowedRegex = /[0-9.]/;
    const element = render(
      <MyInput value='123' onCommit={handleCommit} allowedRegex={allowedRegex} />
    );
    const input = element.getByRole('textbox') as HTMLInputElement;
    // add a . and 4 at the end of the value
    await user.type(input, '.4{enter}');

    expect(handleCommit).toHaveBeenCalledWith('123.4');
  });

  test('prevents disallowed key input', async () => {
    const user = userEvent.setup();
    const handleCommit = jest.fn();
    // allow 0-9 and '.' only
    const allowedRegex = /[0-9.]/;
    const element = render(
      <MyInput value='123' onCommit={handleCommit} allowedRegex={allowedRegex} />
    );
    const input = element.getByRole('textbox') as HTMLInputElement;
    // add a . and 4 at the end of the value
    await user.type(input, 'abcd');

    expect(input.value).toBe('123');
  });

  test('resets to original value on Escape key', async () => {
    const user = userEvent.setup();
    const handleCommit = jest.fn();
    // allow 0-9 and '.' only
    const allowedRegex = /[0-9.]/;
    const element = render(
      <MyInput value='123' onCommit={handleCommit} allowedRegex={allowedRegex} />
    );
    const input = element.getByRole('textbox') as HTMLInputElement;

    await user.type(input, '.4');
    expect(input.value).toBe('123.4');

    await user.type(input, '{Escape}');
    expect(input.value).toBe('123');
  });

  test('drop staging value if prop value changes', async () => {
    const user = userEvent.setup();
    const handleCommit = jest.fn();
    // allow 0-9 and '.' only
    const allowedRegex = /[0-9.]/;
    const element = render(
      <MyInput value='123' onCommit={handleCommit} allowedRegex={allowedRegex} />
    );
    const input = element.getByRole('textbox') as HTMLInputElement;

    await user.type(input, '.4');
    expect(input.value).toBe('123.4');

    element.rerender(
      <MyInput value="1" onCommit={handleCommit} allowedRegex={allowedRegex} />
    );

    expect(input.value).toBe('1');
  });
});
