import * as React from "react";
import styled from "styled-components";
import { Form, Button } from "@procore/core-react";
import { InputField } from "./InputField";
import { SignInFormProps } from "./types";

export const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  return (
    <StyledForm>
      <FormHeader>
        <Title>Welcome Back</Title>
        <Subtitle>Enter your email and password to sign in</Subtitle>
      </FormHeader>

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

      <SignInButton variant="primary">
        <ButtonContent>SIGN IN</ButtonContent>
      </SignInButton>

      <SignUpText>
        <span className="regular-text">Don't have an account?</span>
        <span className="highlight-text">Sign up</span>
      </SignUpText>
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Title = styled.h1`
  color: var(--Teal-Teal-300, #4fd1c5);
  font-size: 32px;
  line-height: 1.3;
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--Gray-Gray-400, #a0aec0);
  font-size: 14px;
  line-height: 1.4;
  margin-top: 27px;
`;

const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 24px;
`;

const Switch = styled.div`
  border-radius: 97.74px;
  background: var(--Teal-Teal-300, #4fd1c5);
  padding: 3px;
  width: 30px;
  height: 19px;
  cursor: pointer;
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
  width: 100%;
  margin-top: 36px;
  min-height: 45px;
`;

const ButtonContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpText = styled.p`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  margin-top: 22px;
  font: 400 14px/1.4 Helvetica, sans-serif;

  .highlight-text {
    color: var(--Teal-Teal-300, #4fd1c5);
    font-weight: 700;
    margin-left: 4px;
    cursor: pointer;
  }
`;
