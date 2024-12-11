import { Builder } from "@builder.io/react";
import { AuthLayout } from "./components/auth1/components/AuthLayout";
import { InputField } from "./components/auth1/components/InputField";

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
    },
  ],
});

Builder.registerComponent(AuthLayout, {
  name: "AuthLayout",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});
