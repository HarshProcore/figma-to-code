import { Builder } from "@builder.io/react";
import { AppCard } from "./components/custom/AppCard";
import { Button } from "./components/ui/button";
import { InputField } from "./components/auth/components/InputField";
import { SocialIconButton } from "./components/socialButtons/SocialIconButton";
import { Switch } from "./components/ui/switch";

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "loading",
      type: "boolean",
    },
    {
      name: "loadingText",
      type: "string",
      meta: {
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(AppCard, {
  name: "AppCard",
});

Builder.registerComponent(InputField, {
  name: "InputField",
  inputs: [
    {
      name: "id",
      type: "string",
      required: true,
    },
    {
      name: "label",
      type: "string",
      required: true,
    },
    {
      name: "placeholder",
      type: "string",
      required: true,
    },
    {
      name: "type",
      type: "string",
      required: true,
    },
    {
      name: "value",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Switch, {
  name: "Switch",
  inputs: [
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputHTMLAttributes<HTMLInputElement>",
      },
    },
    {
      name: "rootRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<HTMLLabelElement>",
      },
    },
    {
      name: "thumbLabel",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ on: any; off: any; }",
      },
    },
    {
      name: "trackLabel",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ on: any; off: any; }",
      },
    },
  ],
});

Builder.registerComponent(SocialIconButton, {
  name: "SocialIconButton",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "iconName",
      type: "string",
      required: true,
    },
  ],
});
