import * as React from "react";
import styled from "styled-components";
import { Form } from "@procore/core-react";
import { InputField } from "./InputField";
import { AuthButton } from "./AuthButton";

export const SignInScreen: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <BackgroundImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/f8569915bed403bcdec8f5c6d6f48256642a4f442cafb09540c082d898e85639?apiKey=5bd3f557d74644629497a5bb9aee279a&"
          alt=""
        />
        <MainContent>
          <FormSection>
            <Column>
              <AuthForm>
                <Title>Welcome Back</Title>
                <Subtitle>Enter your email and password to sign in</Subtitle>

                <InputField
                  label="Email"
                  placeholder="Your email address"
                  type="email"
                  id="email"
                />

                <InputField
                  label="Password"
                  placeholder="Your password"
                  type="password"
                  id="password"
                />

                <RememberMeWrapper>
                  <Switch>
                    <SwitchIndicator />
                  </Switch>
                  <RememberMeText>Remember me</RememberMeText>
                </RememberMeWrapper>

                <AuthButton>SIGN IN</AuthButton>

                <SignUpText>
                  <span className="regular-text">Don't have an account? </span>
                  <span className="highlight-text">Sign up</span>
                </SignUpText>
              </AuthForm>
            </Column>
            <ImageColumn>
              <SideImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/3211a7bde3b30a4e8473e66805e8c9f5f7417e693360b0ecd1dbf4514a3d7839?apiKey=5bd3f557d74644629497a5bb9aee279a&"
                alt=""
              />
            </ImageColumn>
          </FormSection>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
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

const MainContent = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding-left: 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
  }
`;

const FormSection = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 26%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const AuthForm = styled(Form)`
  position: relative;
  width: 100%;
  align-self: stretch;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  color: var(--Teal-Teal-300, #4fd1c5);
  text-align: center;
  font: 700 32px/1.3 Helvetica, sans-serif;
  margin-bottom: 27px;
`;

const Subtitle = styled.p`
  color: var(--Gray-Gray-400, #a0aec0);
  text-align: center;
  font: 700 14px/1.4 Helvetica, sans-serif;
  margin-bottom: 42px;
`;

const RememberMeWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 10px;
  align-items: center;
`;

const Switch = styled.div`
  border-radius: 97.74px;
  background: var(--Teal-Teal-300, #4fd1c5);
  padding: 3px;
  width: 30px;
  height: 19px;
`;

const SwitchIndicator = styled.div`
  background-color: var(--black-amp-white-white, #fff);
  border-radius: 50%;
  height: 13px;
  width: 13px;
`;

const RememberMeText = styled.span`
  color: var(--Gray-Gray-700, #2d3748);
  font: 400 12px Helvetica, sans-serif;
`;

const SignUpText = styled.div`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  margin-top: 22px;
  font: 700 14px/1.4 Helvetica, sans-serif;

  .highlight-text {
    color: var(--Teal-Teal-300, #4fd1c5);
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 74%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SideImage = styled.img`
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
