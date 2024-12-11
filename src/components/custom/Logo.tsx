import styled from "styled-components";
import { IconButton } from "./IconButton";

interface LogoProps {
  name: string;
}

const StyledIconButton = styled(IconButton)`
  font-weight: 600;
  font-size: 14px;
`;

export function Logo(props: LogoProps) {
  return (
    <StyledIconButton iconName="logo" label={props.name}></StyledIconButton>
  );
}
