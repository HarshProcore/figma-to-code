import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { AppInput } from "@/components/ui/input";
import { AppLink } from "@/components/ui/link";
import { Switch } from "@/components/ui/switch";
import React from "react";

function AppComponents() {
  return (
    <>
      <Button>Awesome</Button>
      <Field label="Email">
        <AppInput placeholder="me@example.com"></AppInput>
      </Field>
      <Switch>Is Cool</Switch>
      <AppLink href="...">Awesome</AppLink>
    </>
  );
}

export { AppComponents };
