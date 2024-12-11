import * as React from "react";
import styled from "styled-components";
import { NavItemProps } from "../types";

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <NavItemWrapper
      isActive={isActive}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      <NavItemContent>
        <NavItemInner>
          <NavIcon loading="lazy" src={icon} alt="" />
          <NavLabel>{label}</NavLabel>
        </NavItemInner>
      </NavItemContent>
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.div<{ isActive: boolean }>`
  border-radius: 12px;
  display: flex;
  height: 23px;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isActive ? "rgba(79,209,197,0.1)" : "transparent"};

  &:hover {
    background-color: rgba(79, 209, 197, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #4fd1c5;
    outline-offset: 2px;
  }
`;

const NavItemContent = styled.div`
  display: flex;
  min-height: 24px;
  align-items: center;
  justify-content: start;
`;

const NavItemInner = styled.div`
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

const NavLabel = styled.div`
  align-self: stretch;
  margin: auto 0;
  font-size: 10px;
  font-weight: 700;
  color: #2d3748;
`;
