import { FaGoogle } from "@/components/custom/Icons";
import { InputField } from "@/components/custom/InputField";
import { SocialIconButton } from "@/components/socialButtons/SocialIconButton";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/ui/link";
import { Switch } from "@/components/ui/switch";
import { IconButton } from "@chakra-ui/react";

function AppComponents() {
  return (
    <>
      <Button>Awesome</Button>
      <InputField label="Name" placeholder="Enter your name" />
      <Switch>Is Cool</Switch>
      <AppLink href="...">Awesome</AppLink>
      <IconButton>
        <FaGoogle />
      </IconButton>
      <SocialIconButton iconName="google" />
    </>
  );
}

export { AppComponents };
