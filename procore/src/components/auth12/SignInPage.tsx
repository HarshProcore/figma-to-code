import * as React from "react";
import styled from "styled-components";
import { SignInForm } from "./SignInForm";

export const SignInPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <FormSection>
        <SignInForm onSubmit={handleSubmit} />
      </FormSection>
      <ImageSection>
        <BackgroundImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/6e5d2c0979d11fd436f596bbe0e0be32b3f78a2059eb124b3f0931d4ba3c8557?apiKey=5bd3f557d74644629497a5bb9aee279a&"
          alt="Sign in page decoration"
        />
      </ImageSection>
    </PageContainer>
  );
};

const PageContainer = styled.main`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: start;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FormSection = styled.section`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: center;
  width: 486px;
  padding: 336px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 0;
  }
`;

const ImageSection = styled.section`
  display: flex;
  min-width: 240px;
  align-items: start;
  justify-content: space-between;
  flex: 1;
  flex-basis: 20px;
  max-width: 1262px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BackgroundImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 1100px;
  min-width: 240px;
`;
