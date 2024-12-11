import * as React from "react";
import styled from "styled-components";

import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  id,
}) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={label}
      />
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
  font: 400 14px/1.4 Helvetica, sans-serif;
`;

const StyledInput = styled.input`
  align-items: center;
  border-radius: 15px;
  border: 1px solid var(--Gray-Gray-200, #e2e8f0);
  background: var(--black-amp-white-white, #fff);
  min-height: 50px;
  padding: 0 20px;
  color: var(--Gray-Gray-400, #a0aec0);
  font: 400 14px/1.4 Helvetica, sans-serif;
  width: 100%;
`;
