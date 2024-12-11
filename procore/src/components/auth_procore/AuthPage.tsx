import * as React from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";

export const AuthPage: React.FC = () => {
  return (
    <PageContainer>
      <LoginForm />
      <ImageSection>
        <AuthImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/6e5d2c0979d11fd436f596bbe0e0be32b3f78a2059eb124b3f0931d4ba3c8557?apiKey=5bd3f557d74644629497a5bb9aee279a&"
          alt="Authentication illustration"
        />
      </ImageSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  gap: 40px 48px;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
`;

const ImageSection = styled.div`
  right: 0%;
  position: fixed;
  display: flex;
  min-width: 240px;
  gap: 10px;
  justify-content: start;
  width: 60%;
`;

const AuthImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 100%;
  min-width: 240px;
  flex: 1;
`;
