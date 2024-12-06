import * as React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => (
  <FooterWrapper>
    <Copyright>
      @ 2021, Made with ❤️ by{" "}
      <Link href="https://creativetim.com">Creative Tim</Link> &{" "}
      <Link href="https://simmmple.com">Simmmple</Link> for a better web
    </Copyright>
    <Links>
      <Link href="/about">Creative Tim</Link>
      <Link href="/about">Simmmple</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/license">License</Link>
    </Links>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  color: var(--Gray-Gray-400, #a0aec0);
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Link = styled.a`
  color: var(--Teal-Teal-300, #4fd1c5);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
