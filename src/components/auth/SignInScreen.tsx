import * as React from "react";
import {
  ScreenWrapper,
  MainContent,
  ContentSection,
} from "./layout/ScreenWrapper";
import { Header } from "./components/Header";
import { SignInForm } from "./components/SignInForm";
import { Footer } from "./components/Footer";
import { useSignIn } from "./hooks/useSignIn";

export const SignInScreen: React.FC = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useSignIn();

  return (
    <ScreenWrapper>
      <MainContent>
        <Header />
        <ContentSection>
          <SignInForm
            email={email}
            password={password}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
          />
        </ContentSection>
        <Footer />
      </MainContent>
    </ScreenWrapper>
  );
};
