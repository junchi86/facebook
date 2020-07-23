import React, { memo, SyntheticEvent, FC } from 'react';

interface IProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const InputComponent: FC<IProps> = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      name={name}
      type={type}
      className="form-control"
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(InputComponent);
