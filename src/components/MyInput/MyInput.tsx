import React, { useState, useEffect } from 'react';
import { FormControl } from 'react-bootstrap';

interface MyInputProps {
  value: string | null;
  onCommit: (newValue: string) => void;
  allowedRegex: RegExp
}

const MyInput: React.FC<MyInputProps> = ({ value, onCommit, allowedRegex }) => {
  const [stagingValue, setStagingValue] = useState<string | null>(null);

  // If the prop value changes, reset local staging value
  useEffect(
    () => {
      setStagingValue(null);
    },
    [value]
  );

  const tmpValue = (
    (stagingValue != null && stagingValue)
    || (value != null && value)
    || ''
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCommit(tmpValue);
    }
    else if (e.key === 'Escape') {
      setStagingValue(null);
    }
    else if (!allowedRegex.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleBlur = () => {
    onCommit(tmpValue);
  };

  return (
    <FormControl
      value={tmpValue}
      onChange={ev => {
        setStagingValue(ev.target.value);
      }}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

export default MyInput;
