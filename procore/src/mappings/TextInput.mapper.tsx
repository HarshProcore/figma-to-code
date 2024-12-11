import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Input } from "@procore/core-react";

// ❖ TextInput
interface FigmaTextInputProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "08258b2024d4ecd1afa4f45e168395ed05736d69",
  mapper(figma: FigmaTextInputProps) {
    return <Input placeholder="Placeholder Text" />;
  },
});
