import { Builder } from "@builder.io/react";
import { Button } from "./components/ui/button";

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
