import * as React from "react";
import styled from "styled-components";
import { Form } from "@procore/core-react";
import { InputField } from "./InputField";
import { AuthButton } from "./AuthButton";

export const SignInScreen: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <TwoColumnLayout>
          <FormColumn>
            <AuthForm>
              <Title>Welcome Back</Title>
              <Subtitle>Enter your email and password to sign in</Subtitle>

              <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />

              <InputField
                label="Password"
                id="password"
                type="password"
                placeholder="Enter your password"
              />

              <RememberMeWrapper>
                <Switch>
                  <SwitchIndicator />
                </Switch>
                <RememberMeText>Remember me</RememberMeText>
              </RememberMeWrapper>

              <AuthButton>SIGN IN</AuthButton>

              <SignUpText>
                <span className="regular-text">Don't have an account?</span>{" "}
                <span className="teal-text">Sign up</span>
              </SignUpText>
            </AuthForm>
          </FormColumn>

          <ImageColumn>
            <HeroImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/088cdb1492ec176541d040bdb6591e563e7674ded6f92bedd8583a94201e4604?apiKey=5bd3f557d74644629497a5bb9aee279a&"
              alt="Sign in illustration"
            />
          </ImageColumn>
        </TwoColumnLayout>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3px;
`;

const ContentWrapper = styled.div`
  margin-bottom: 200px;
`;

const TwoColumnLayout = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const AuthForm = styled(Form)`
  position: relative;
  width: 100%;
  align-self: stretch;
  margin: auto -3px auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  color: var(--Teal-Teal-300, #4fd1c5);
  text-align: center;
  z-index: 10;
  margin-top: -9px;
  font: 700 32px/1.3 Helvetica, sans-serif;
`;

const Subtitle = styled.p`
  color: var(--Gray-Gray-400, #a0aec0);
  text-align: center;
  margin-top: 27px;
  font: 700 14px/1.4 Helvetica, sans-serif;
  @media (max-width: 991px) {
    margin-left: 5px;
  }
`;

const RememberMeWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  width: 124px;
  max-width: 100%;
  gap: 10px;
  @media (max-width: 991px) {
    margin-left: 2px;
  }
`;

const Switch = styled.div`
  justify-content: center;
  align-items: end;
  border-radius: 97.74px;
  background: var(--Teal-Teal-300, #4fd1c5);
  display: flex;
  min-height: 19px;
  flex-direction: column;
  overflow: hidden;
  padding: 3px 2px 3px 1px;
`;

const SwitchIndicator = styled.div`
  background-color: var(--black-amp-white-white, #fff);
  border-radius: 50%;
  display: flex;
  min-height: 13px;
  width: 14px;
  fill: var(--black-amp-white-white, #fff);
`;

const RememberMeText = styled.span`
  color: var(--Gray-Gray-700, #2d3748);
  align-self: start;
  font: 400 12px Helvetica, sans-serif;
`;

const SignUpText = styled.div`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  align-self: center;
  margin-top: 22px;
  font: 700 14px/1.4 Helvetica, sans-serif;

  .regular-text {
    font-weight: 400;
  }

  .teal-text {
    color: var(--Teal-Teal-300, #4fd1c5);
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const HeroImage = styled.img`
  aspect-ratio: 1.14;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  flex-grow: 1;
  margin-left: 23px;
  max-width: 932px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;
