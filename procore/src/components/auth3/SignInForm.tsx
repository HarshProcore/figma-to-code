import * as React from "react";
import styled from "styled-components";
import { Form } from "@procore/core-react";
import { InputField } from "./InputField";
import { AuthButton } from "./AuthButton";

export const SignInForm: React.FC = () => {
  return (
    <AuthContainer>
      <AuthLayout>
        <FormColumn>
          <StyledForm>
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
              <SwitchBase>
                <SwitchIndicator />
              </SwitchBase>
              <RememberMeText>Remember me</RememberMeText>
            </RememberMeWrapper>

            <AuthButton>SIGN IN</AuthButton>

            <SignUpText>
              <span className="regular-text">Don't have an account?</span>{" "}
              <span className="highlight-text">Sign up</span>
            </SignUpText>
          </StyledForm>
        </FormColumn>

        <ImageColumn>
          <AuthImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/fed8cc9a43d0126de69576209ecbbebe5767795047f7a7f9842cfd55c0e1f99a?apiKey=5bd3f557d74644629497a5bb9aee279a&"
            alt="Authentication illustration"
          />
        </ImageColumn>
      </AuthLayout>
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding-left: 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
  }
`;

const AuthLayout = styled.div`
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
  width: 42%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledForm = styled(Form)`
  width: 100%;
  align-self: stretch;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  color: var(--Teal-Teal-300, #4fd1c5);
  text-align: center;
  margin-top: -9px;
  font: 700 32px/1.3 Helvetica, sans-serif;
`;

const Subtitle = styled.p`
  color: var(--Gray-Gray-400, #a0aec0);
  text-align: center;
  margin-top: 43px;
  font: 700 14px/1.4 Helvetica, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const RememberMeWrapper = styled.div`
  display: flex;
  margin-top: 31px;
  width: 171px;
  max-width: 100%;
  gap: 20px;
  align-items: center;
`;

const SwitchBase = styled.div`
  justify-content: center;
  align-items: end;
  border-radius: 97.74px;
  background: var(--Teal-Teal-300, #4fd1c5);
  display: flex;
  min-height: 24px;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
  padding: 6px 2px;
`;

const SwitchIndicator = styled.div`
  background-color: var(--black-amp-white-white, #fff);
  border-radius: 50%;
  min-height: 13px;
  width: 14px;
`;

const RememberMeText = styled.span`
  color: var(--Gray-Gray-700, #2d3748);
  font: 400 12px Helvetica, sans-serif;
`;

const SignUpText = styled.div`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  margin-top: 29px;
  font: 700 14px/1.4 Helvetica, sans-serif;

  .regular-text {
    font-weight: 400;
  }

  .highlight-text {
    color: var(--Teal-Teal-300, #4fd1c5);
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 58%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const AuthImage = styled.img`
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
