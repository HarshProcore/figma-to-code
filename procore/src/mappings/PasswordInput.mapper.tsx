import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Input } from "@procore/core-react";

// ❖ PasswordInput
interface FigmaPasswordInputProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "2316e49518320de3f29e162840b6afd54d1d8b1c",
  mapper(figma: FigmaPasswordInputProps) {
    return <Input placeholder="Placeholder Text" />;
  },
});
