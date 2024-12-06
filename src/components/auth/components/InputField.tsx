import * as React from "react";
import styled from "styled-components";
import { InputFieldProps } from "../types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputContainer>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  color: var(--Gray-Gray-700, #2d3748);
  font-size: 14px;
  font-weight: 400;
`;

const InputContainer = styled.div`
  align-items: center;
  border-radius: 15px;
  border: 1px solid var(--Gray-Gray-200, #e2e8f0);
  background: var(--black-amp-white-white, #fff);
  display: flex;
  min-height: 50px;
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  color: var(--Gray-Gray-400, #a0aec0);
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
