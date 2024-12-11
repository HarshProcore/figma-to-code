import styled from "styled-components";

const ColoredDiv = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: var(--chakra-colors-color-palette-solid);
  border-radius: 15px;
  z-index: 0;
`;

export function ColoredBg() {
  return <ColoredDiv />;
}
