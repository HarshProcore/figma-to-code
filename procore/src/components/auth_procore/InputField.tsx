import * as React from "react";
import styled from "styled-components";
import { Input } from "@procore/core-react";
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
  @media (max-width: 991px) {
    margin-left: 8px;
  }
`;

const StyledInput = styled(Input)`
  min-height: 50px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
