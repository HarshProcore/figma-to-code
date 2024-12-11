import * as React from "react";
import styled from "styled-components";
import { AppCard } from "@/components/custom/AppCard";
import { InputField } from "@/components/auth/components/InputField";
import { Switch } from "@/components/ui/switch";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { AuthFormProps, AuthFormData } from "../types";

export const RegisterForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<AuthFormData>({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <StyledCard>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <Title>Register with</Title>
            <SocialAuthButtons />
            <Divider>or</Divider>

            <InputField
              label="Name"
              placeholder="Your Name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              id="register-name"
            />

            <InputField
              label="Email"
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id="register-email"
            />

            <InputField
              label="Password"
              placeholder="Your Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              id="register-password"
            />

            <SwitchContainer>
              <Switch
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, rememberMe: checked })
                }
                id="remember-me"
              >
                <span>Remember me</span>
              </Switch>
            </SwitchContainer>

            <SubmitButton type="submit">
              <ButtonText>Register</ButtonText>
            </SubmitButton>

            <SignInText>
              Already have an account?{" "}
              <SignInLink href="/signin">Sign in</SignInLink>
            </SignInText>
          </form>
        </FormWrapper>
      </StyledCard>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  max-width: 452px;
  flex-direction: column;
`;

const StyledCard = styled(AppCard)`
  width: 100%;
`;

const FormWrapper = styled.div`
  border-radius: 15px;
  background: var(--black-amp-white-white, #fff);
  box-shadow: 0px 7px 23px 0px rgba(0, 0, 0, 0.05);
  padding: 61px 51px;
`;

const Title = styled.h1`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  font: 700 18px/1.4 Helvetica, sans-serif;
  margin-bottom: 30px;
`;

const Divider = styled.div`
  color: var(--Gray-Gray-400, #a0aec0);
  text-align: center;
  font: 700 18px/1.4 Helvetica, sans-serif;
  margin: 21px 0;
`;

const SwitchContainer = styled.div`
  margin: 30px 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  border-radius: 12px;
  background: var(--Teal-Teal-300, #4fd1c5);
  color: var(--black-amp-white-white, #fff);
  padding: 12px;
  border: none;
  font: 700 14px Helvetica, sans-serif;
  cursor: pointer;

  &:focus {
    outline: 2px solid var(--Teal-Teal-400);
    outline-offset: 2px;
  }
`;

const ButtonText = styled.span`
  display: block;
  text-align: center;
`;

const SignInText = styled.p`
  color: var(--Gray-Gray-700, #2d3748);
  text-align: center;
  margin-top: 17px;
  font: 400 14px/1.4 Helvetica, sans-serif;
`;

const SignInLink = styled.a`
  color: var(--Teal-Teal-300, #4fd1c5);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid var(--Teal-Teal-400);
    outline-offset: 2px;
  }
`;
