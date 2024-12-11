import * as React from "react";
import styled from "styled-components";
import { Input } from "@procore/core-react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  placeholder,
}) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
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
  margin: 24px 0;
`;

const InputLabel = styled.label`
  color: var(--Gray-Gray-700, #2d3748);
  font: 400 14px/1.4 Helvetica, sans-serif;
  margin-bottom: 15px;
`;

const StyledInput = styled(Input)`
  min-height: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
