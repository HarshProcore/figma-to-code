import * as React from "react";
import styled from "styled-components";
import { Form } from "@procore/core-react";
import { InputField } from "./InputField";
import { AuthButton } from "./AuthButton";

export const LoginForm: React.FC = () => {
  return (
    <LoginContainer>
      <StyledForm>
        <Title>Welcome Back</Title>
        <Subtitle>Enter your email and password to sign in</Subtitle>

        <InputField
          label="Email"
          placeholder="Enter your email"
          type="email"
          id="email"
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
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

        <SignupText>
          <span className="regular-text">Don't have an account?</span>
          <span className="signup-link">Sign up</span>
        </SignupText>
      </StyledForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: center;
  width: 613px;
  padding: 20px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 593px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  color: var(--Teal-Teal-300, #4fd1c5);
  text-align: center;
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
  align-items: center;
  gap: 8px;
  @media (max-width: 991px) {
    margin-left: 4px;
  }
`;

const Switch = styled.div`
  justify-content: center;
  align-items: end;
  border-radius: 97.74px;
  background: var(--Teal-Teal-300, #4fd1c5);
  display: flex;
  min-height: 19px;
  padding: 3px;
  width: 32px;
`;

const SwitchIndicator = styled.div`
  background-color: var(--black-amp-white-white, #fff);
  border-radius: 50%;
  width: 13px;
  height: 13px;
`;

const RememberMeText = styled.span`
  color: var(--Gray-Gray-700, #2d3748);
  font: 400 12px Helvetica, sans-serif;
`;

const SignupText = styled.div`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  margin-top: 22px;
  font: 700 14px/1.4 Helvetica, sans-serif;

  .regular-text {
    font-weight: 400;
  }

  .signup-link {
    color: var(--Teal-Teal-300, #4fd1c5);
    margin-left: 4px;
    cursor: pointer;
  }
`;
