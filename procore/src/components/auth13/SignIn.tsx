import * as React from "react";
import styled from "styled-components";
import { AppCard } from "../custom/AppCard";
import { Box } from "@chakra-ui/react";
import { Button } from "@procore/core-react";
import { NavItem } from "./components/NavItem";
import { InputField } from "./components/InputField";
import { Switch } from "./components/Switch";
import { AuthLayout } from "./components/AuthLayout";

export const SignIn: React.FC = () => {
  const [rememberMe, setRememberMe] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState("SIGN IN");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <AuthLayout>
      <ContentLayout>
        <LeftColumn>
          <AuthContent>
            <Navigation>
              <NavHeader>
                <Logo
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/2447d51c75b5d3cbfdf3ce6e7427a3e37a9ef0eeb37868ad7a8ecad167ef218c?apiKey=5bd3f557d74644629497a5bb9aee279a&"
                  alt="Purity UI Logo"
                />
                <BrandName>PURITY UI DASHBOARD</BrandName>
              </NavHeader>

              {[
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/0b7ba187807455a84446119417e84d936573758bbdb2a56059d8ed03e44501a5?apiKey=5bd3f557d74644629497a5bb9aee279a&",
                  label: "DASHBOARD",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/fb70dec346563e61ea9590455555a93e4b44c75d6027ee802fdc24907f9ef68a?apiKey=5bd3f557d74644629497a5bb9aee279a&",
                  label: "PROFILE",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/d881f65825a26714de634bb877d3bbc46473c91b4e91efc52bc7f967e2f8ebc7?apiKey=5bd3f557d74644629497a5bb9aee279a&",
                  label: "SIGN UP",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/5bd3f557d74644629497a5bb9aee279a/99943948d68868a9c0145c1e33734d3ba803cee3f55de47f2469f4b025ed5a62?apiKey=5bd3f557d74644629497a5bb9aee279a&",
                  label: "SIGN IN",
                },
              ].map((item) => (
                <NavItem
                  key={item.label}
                  {...item}
                  isActive={activeNav === item.label}
                  onClick={() => setActiveNav(item.label)}
                />
              ))}

              <DownloadButton>Free Download</DownloadButton>
            </Navigation>

            <AuthForm onSubmit={handleSubmit}>
              <FormHeader>
                <Title>Welcome Back</Title>
                <Subtitle>Enter your email and password to sign in</Subtitle>
              </FormHeader>

              <FormFields>
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Your email address"
                  required
                />
                <InputField
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Your password"
                  required
                />
              </FormFields>

              <RememberMeSection>
                <Switch
                  checked={rememberMe}
                  onChange={setRememberMe}
                  label="Remember me"
                />
              </RememberMeSection>

              <SignInButton type="submit">SIGN IN</SignInButton>

              <SignUpPrompt>
                Don't have an account?{" "}
                <SignUpLink href="/signup">Sign up</SignUpLink>
              </SignUpPrompt>
            </AuthForm>
          </AuthContent>
        </LeftColumn>

        <RightColumn>
          <StyledAppCard />
        </RightColumn>
      </ContentLayout>
    </AuthLayout>
  );
};

const ContentLayout = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AuthContent = styled.div`
  padding: 24px 0;
`;

const Navigation = styled(Box)`
  border-radius: 15px;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-bottom: 40px;
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 22px;
  height: 22px;
`;

const BrandName = styled.div`
  color: #2d3748;
  font-weight: 700;
  font-size: 14px;
`;

const DownloadButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

const AuthForm = styled.form`
  max-width: 350px;
`;

const FormHeader = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #4fd1c5;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 27px;
`;

const Subtitle = styled.p`
  color: #a0aec0;
  font-size: 14px;
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

const RememberMeSection = styled.div`
  margin-bottom: 36px;
`;

const SignInButton = styled(Button)`
  width: 100%;
  margin-bottom: 22px;
`;

const SignUpPrompt = styled.p`
  text-align: center;
  color: #2d3748;
  font-size: 14px;
`;

const SignUpLink = styled.a`
  color: #4fd1c5;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #4fd1c5;
    outline-offset: 2px;
  }
`;

const StyledAppCard = styled(AppCard)`
  width: 100%;
  height: 872px;
`;
