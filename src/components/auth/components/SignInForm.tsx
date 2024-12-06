import * as React from "react";
import styled from "styled-components";
import { InputField } from "./InputField";
import { Button } from "./Button";

interface SignInFormProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit}>
    <Title>Welcome Back</Title>
    <Subtitle>Enter your email and password to sign in</Subtitle>

    <InputField
      label="Email"
      type="email"
      id="email"
      value={email}
      onChange={onEmailChange}
      placeholder="Your email address"
    />

    <InputField
      label="Password"
      type="password"
      id="password"
      value={password}
      onChange={onPasswordChange}
      placeholder="Your password"
    />

    <RememberMe>
      <Checkbox type="checkbox" id="remember" />
      <Label htmlFor="remember">Remember me</Label>
    </RememberMe>

    <Button variant="primary" type="submit">
      SIGN IN
    </Button>

    <SignUpPrompt>
      Don't have an account? <SignUpLink href="/signup">Sign up</SignUpLink>
    </SignUpPrompt>
  </Form>
);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--Teal-Teal-300, #4fd1c5);
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--Gray-Gray-400, #a0aec0);
  margin: 0;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`;

const Label = styled.label`
  color: var(--Gray-Gray-700, #2d3748);
  font-size: 0.875rem;
`;

const SignUpPrompt = styled.p`
  text-align: center;
  color: var(--Gray-Gray-700, #2d3748);
  margin: 0;
`;

const SignUpLink = styled.a`
  color: var(--Teal-Teal-300, #4fd1c5);
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;
