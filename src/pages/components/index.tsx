import { Background } from "@/components/custom/Background";
import { IconButton } from "@/components/custom/IconButton";
import { InputField } from "@/components/custom/InputField";
import { SocialIconButton } from "@/components/socialButtons/SocialIconButton";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/ui/link";
import { Switch } from "@/components/ui/switch";

function AppComponents() {
  return (
    <Background>
      <Button>Awesome</Button>
      <InputField label="Name" placeholder="Enter your name" />
      <Switch>Is Cool</Switch>
      <AppLink href="...">Awesome</AppLink>
      <SocialIconButton iconName="google" />
      <IconButton iconName="sign up" label="SIGN IN"></IconButton>
    </Background>
  );
}

export { AppComponents };
