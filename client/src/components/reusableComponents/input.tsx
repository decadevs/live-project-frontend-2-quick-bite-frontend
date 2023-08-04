import React, { ChangeEvent } from 'react';

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  required,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className="w-full p-2 border border-gray-300 rounded mb-4"
      required={required}
    />
  );
};

export default Input;
