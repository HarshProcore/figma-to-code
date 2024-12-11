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
  margin-top: 36px;
  min-height: 45px;
  width: 100%;
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
`;

const ButtonText = styled.div`
  text-align: center;
`;
