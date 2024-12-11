import * as React from "react";
import styled from "styled-components";
import { SocialIconButton } from "@/components/socialButtons/SocialIconButton";
import { SocialButtonProps } from "../types";

const socialButtons: SocialButtonProps[] = [
  { iconName: "google" },
  { iconName: "apple" },
  { iconName: "facebook" },
];

export const SocialAuthButtons: React.FC = () => {
  return (
    <ButtonContainer>
      {socialButtons.map((button, index) => (
        <StyledSocialButton key={index} iconName={button.iconName} />
      ))}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  width: 253px;
  max-width: 100%;
  gap: 15px;
  justify-content: center;
`;

const StyledSocialButton = styled(SocialIconButton)`
  width: 74px;
  height: 74px;
`;
