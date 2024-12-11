import * as React from "react";
import styled from "styled-components";
import { InputFieldProps } from "../types";

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer hasError={!!error}>
        <Input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
      </InputContainer>
      {error && (
        <ErrorText id={`${id}-error`} role="alert">
          {error}
        </ErrorText>
      )}
      {helperText && !error && (
        <HelperText id={`${id}-helper`}>{helperText}</HelperText>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const Label = styled.label`
  color: var(--Gray-Gray-700, #2d3748);
  font-weight: 400;
  font-size: 14px;
`;

const InputContainer = styled.div<{ hasError: boolean }>`
  align-items: center;
  border-radius: 15px;
  border: 1px solid
    ${(props) => (props.hasError ? "#E53E3E" : "var(--Gray-Gray-200, #e2e8f0)")};
  background: var(--black-amp-white-white, #fff);
  display: flex;
  min-height: 50px;
  padding: 0 20px;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: #4fd1c5;
  }
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

  &::placeholder {
    color: var(--Gray-Gray-400, #a0aec0);
  }
`;

const ErrorText = styled.span`
  color: #e53e3e;
  font-size: 12px;
  margin-top: -8px;
`;

const HelperText = styled.span`
  color: var(--Gray-Gray-400, #a0aec0);
  font-size: 12px;
  margin-top: -8px;
`;
