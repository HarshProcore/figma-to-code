import * as React from "react";
import styled from "styled-components";
import { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      <ButtonContent>
        <ButtonInner>
          <ButtonText>{children}</ButtonText>
        </ButtonInner>
      </ButtonContent>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ variant: string }>`
  border-radius: ${(props) => (props.variant === "primary" ? "12px" : "35px")};
  background: var(--Teal-Teal-300, #4fd1c5);
  display: flex;
  min-height: ${(props) => (props.variant === "primary" ? "45px" : "35px")};
  align-items: center;
  color: var(--black-amp-white-white, #fff);
  text-align: center;
  justify-content: center;
  padding: 0 8px;
  border: none;
  cursor: pointer;
`;

const ButtonContent = styled.div`
  align-self: stretch;
  display: flex;
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
  align-items: center;
  justify-content: start;
`;

const ButtonText = styled.div`
  align-self: stretch;
  gap: 4px;
  overflow: hidden;
  margin: auto 0;
  font-weight: 700;
  font-size: 10px;
`;
