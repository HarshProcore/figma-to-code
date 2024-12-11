import * as React from "react";
import styled from "styled-components";
import { Form } from "@procore/core-react";
import { InputField } from "./InputField";
import { AuthButton } from "./AuthButton";

export const LoginPage: React.FC = () => {
  return (
    <PageContainer>
      <FormSection>
        <StyledForm>
          <HeaderSection>
            <Title>Welcome Back</Title>
            <Subtitle>Enter your email and password to sign in</Subtitle>
          </HeaderSection>

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

          <RememberMeSection>
            <Switch>
              <SwitchIndicator />
            </Switch>
            <RememberMeText>Remember me</RememberMeText>
          </RememberMeSection>

          <AuthButton>SIGN IN</AuthButton>

          <SignupText>
            <span className="regular-text">Don't have an account?</span>
            <span className="signup-link">Sign up</span>
          </SignupText>
        </StyledForm>
      </FormSection>

      <ImageSection>
        <HeroImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/bac483533b1f17fa3f9f06ac207a231172de552bb3faf539243d7f2dc22585cb?apiKey=5bd3f557d74644629497a5bb9aee279a&"
          alt="Login hero image"
        />
      </ImageSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: start;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FormSection = styled.div`
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

const StyledForm = styled(Form)`
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeaderSection = styled.div`
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

const RememberMeSection = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 4px;
  align-items: center;
`;

const Switch = styled.div`
  justify-content: center;
  align-items: end;
  border-radius: 97.74px;
  background: var(--Teal-Teal-300, #4fd1c5);
  display: flex;
  min-height: 19px;
  padding: 3px 2px 3px 1px;
  cursor: pointer;
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

const SignupText = styled.div`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  margin-top: 22px;
  font: 400 14px/1.4 Helvetica, sans-serif;

  .signup-link {
    color: var(--Teal-Teal-300, #4fd1c5);
    font-weight: 700;
    cursor: pointer;
  }
`;

const ImageSection = styled.div`
  display: flex;
  min-width: 240px;
  width: 1242px;
  max-width: 1262px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeroImage = styled.img`
  aspect-ratio: 1.11;
  object-fit: contain;
  object-position: center;
  width: 100%;
  min-width: 240px;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
