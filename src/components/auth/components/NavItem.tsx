import * as React from "react";
import styled from "styled-components";
import { NavItemProps } from "../types";

export const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
  return (
    <NavItemWrapper>
      <NavContent>
        <NavInner>
          <NavIcon loading="lazy" src={icon} alt="" />
          <NavText>{text}</NavText>
        </NavInner>
      </NavContent>
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.div`
  border-radius: 12px;
  display: flex;
  height: 23px;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

const NavContent = styled.div`
  display: flex;
  min-height: 24px;
  align-items: center;
  justify-content: start;
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  justify-content: center;
  margin: auto 0;
`;

const NavIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 11px;
  align-self: stretch;
  margin: auto 0;
`;

const NavText = styled.div`
  align-self: stretch;
  margin: auto 0;
`;
