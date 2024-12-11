import * as React from "react";
import styled from "styled-components";
import { Button } from "@procore/core-react";
import { AuthButtonProps } from "./types";

export const AuthButton: React.FC<AuthButtonProps> = ({ children }) => {
  return (
    <StyledButton variant="primary">
      <ButtonContent>
        <ButtonText>{children}</ButtonText>
      </ButtonContent>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  align-self: stretch;
  margin-top: 36px;
  min-height: 45px;
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonText = styled.span`
  font: 700 14px/1.4 Helvetica, sans-serif;
`;
