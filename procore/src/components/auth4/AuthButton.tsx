import * as React from "react";
import styled from "styled-components";
import { Button } from "@procore/core-react";
import { AuthButtonProps } from "./types";

export const AuthButton: React.FC<AuthButtonProps> = ({ children }) => {
  return (
    <StyledButton variant="primary">
      <ButtonContent>
        <ButtonInner>
          <ButtonText>{children}</ButtonText>
        </ButtonInner>
      </ButtonContent>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  align-self: stretch;
  margin-top: 36px;
  min-height: 45px;
  @media (max-width: 991px) {
    margin-left: 2px;
  }
`;

const ButtonContent = styled.div`
  align-self: stretch;
  display: flex;
  width: 38px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin: auto 0;
`;

const ButtonInner = styled.div`
  display: flex;
  min-height: 24px;
  width: 100%;
  max-width: 38px;
  align-items: center;
  justify-content: start;
`;

const ButtonText = styled.div`
  width: 38px;
  align-self: stretch;
  gap: 4px;
  overflow: hidden;
  margin: auto 0;
`;
