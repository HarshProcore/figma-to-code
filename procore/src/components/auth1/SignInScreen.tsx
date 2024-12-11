import * as React from "react";
import styled from "styled-components";
import { Button } from "@procore/core-react";

import { AuthLayout } from "./components/AuthLayout";
import { InputField } from "./components/InputField";

export const SignInScreen: React.FC = () => {
  return (
    <AuthLayout>
      <FormContainer>
        <Title>Welcome Back</Title>
        <SubtitleWrapper>
          <Subtitle>Enter your email and password to sign in</Subtitle>
        </SubtitleWrapper>

        <form>
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

          <SignInButton variant="primary">
            <ButtonContent>SIGN IN</ButtonContent>
          </SignInButton>
        </form>

        <SignUpText>
          <span>Don't have an account? </span>
          <SignUpLink>Sign up</SignUpLink>
        </SignUpText>
      </FormContainer>
    </AuthLayout>
  );
};

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  color: var(--Teal-Teal-300, #4fd1c5);
  font: 700 32px/1.3 Helvetica, sans-serif;
`;

const SubtitleWrapper = styled.div`
  margin-top: 27px;
  padding: 0 70px 0 5px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Subtitle = styled.p`
  color: var(--Gray-Gray-400, #a0aec0);
  font: 700 14px/1.4 Helvetica, sans-serif;
`;

const RememberMeWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 10px;
  align-items: center;
  @media (max-width: 991px) {
    margin-left: 2px;
  }
`;

const Switch = styled.div`
  border-radius: 97.74px;
  background: var(--Teal-Teal-300, #4fd1c5);
  padding: 3px;
  width: 30px;
  height: 19px;
  display: flex;
  align-items: center;
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

const SignInButton = styled(Button)`
  margin-top: 36px;
  width: 100%;
  height: 45px;
  @media (max-width: 991px) {
    margin-left: 2px;
  }
`;

const ButtonContent = styled.span`
  font-weight: 600;
`;

const SignUpText = styled.p`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  margin-top: 22px;
  font: 400 14px/1.4 Helvetica, sans-serif;
`;

const SignUpLink = styled.span`
  color: var(--Teal-Teal-300, #4fd1c5);
  font-weight: 700;
  cursor: pointer;
`;
