import styled from "styled-components";
import { ColoredBg } from "./ColoredBg";

const StyleddDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  position: relative;
`;

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background(props: BackgroundProps) {
  return (
    <StyleddDiv>
      <ColoredBg />
      <ContentWrapper>{props.children}</ContentWrapper>
    </StyleddDiv>
  );
}
