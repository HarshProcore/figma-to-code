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
  width: 100%;
  min-height: 45px;
  margin-top: 36px;
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.div`
  text-align: center;
`;
