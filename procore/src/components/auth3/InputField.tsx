import * as React from "react";
import styled from "styled-components";
import { Input } from "@procore/core-react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  placeholder,
}) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        aria-label={label}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 100%;
`;

const Label = styled.label`
  color: var(--Gray-Gray-700, #2d3748);
  font: 400 14px/1.4 Helvetica, sans-serif;
`;

const StyledInput = styled(Input)`
  min-height: 65px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
