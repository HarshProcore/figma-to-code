import * as React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { Button } from "./Button";

const navItems = [
  { icon: "/icons/dashboard.svg", text: "DASHBOARD" },
  { icon: "/icons/profile.svg", text: "PROFILE" },
  { icon: "/icons/signup.svg", text: "SIGN UP" },
  { icon: "/icons/signin.svg", text: "SIGN IN" },
];

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo>
      <LogoIcon loading="lazy" src="/logo.svg" alt="Logo" />
      <LogoText>PURITY UI DASHBOARD</LogoText>
    </Logo>
    <Navigation>
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </Navigation>
    <Button variant="secondary">Free Download</Button>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const LogoText = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: var(--Gray-Gray-700, #2d3748);
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
`;
