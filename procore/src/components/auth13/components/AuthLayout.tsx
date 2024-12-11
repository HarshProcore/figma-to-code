import * as React from "react";
import styled from "styled-components";
import { AuthLayoutProps } from "../types";

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>{children}</LayoutContent>
      <Footer>
        <Copyright>
          @ 2021, Made with ❤️ by{" "}
          <FooterLink href="https://creativetim.com">Creative Tim</FooterLink> &{" "}
          <FooterLink href="https://simmmple.com">Simmmple</FooterLink> for a
          better web
        </Copyright>
        <FooterLinks>
          <FooterLink href="/creative-tim">Creative Tim</FooterLink>
          <FooterLink href="/simmmple">Simmmple</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/license">License</FooterLink>
        </FooterLinks>
      </Footer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
`;

const LayoutContent = styled.main`
  flex: 1;
  padding: 0 80px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 80px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 991px) {
    padding: 20px;
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: #38b2ac;
  font-size: 12px;
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 45px;

  @media (max-width: 991px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: #a0aec0;
  font-size: 12px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #4fd1c5;
  }

  &:focus-visible {
    outline: 2px solid #4fd1c5;
    outline-offset: 2px;
  }
`;
