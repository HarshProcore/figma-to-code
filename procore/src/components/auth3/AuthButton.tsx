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
  margin-top: 47px;
  min-height: 59px;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.span`
  font: 700 14px/1.4 Helvetica, sans-serif;
`;
