import * as React from "react";
import styled from "styled-components";
import { AuthLayoutProps } from "../types";

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/f8569915bed403bcdec8f5c6d6f48256642a4f442cafb09540c082d898e85639?apiKey=5bd3f557d74644629497a5bb9aee279a&"
          alt="Background pattern"
        />
        <ContentWrapper>
          <Content>
            <FormSection>{children}</FormSection>
            <ImageSection>
              <IllustrationImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/3211a7bde3b30a4e8473e66805e8c9f5f7417e693360b0ecd1dbf4514a3d7839?apiKey=5bd3f557d74644629497a5bb9aee279a&"
                alt="Login illustration"
              />
            </ImageSection>
          </Content>
        </ContentWrapper>
      </BackgroundWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 1053px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding-left: 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
  }
`;

const Content = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 26%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 74%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const IllustrationImage = styled.img`
  aspect-ratio: 0.93;
  object-fit: contain;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;
