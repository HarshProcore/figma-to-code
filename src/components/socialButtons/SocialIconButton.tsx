import * as React from "react";
import styled from "styled-components";
import { IconButton } from "@/components/custom/IconButton";

interface SocialIconButtonProps {
  iconName: string;
  className?: string;
}

export const SocialIconButton: React.FC<SocialIconButtonProps> = ({
  iconName,
  className,
}) => {
  return <StyledIconButton iconName={iconName} className={className} />;
};

const StyledIconButton = styled(IconButton)`
  height: 74px;
  width: 74px;
  background-color: white;
  color: black;
  border: 1px solid #e2e8f0;
`;
