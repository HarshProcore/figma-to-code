import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Form } from "@procore/core-react";

// ❖ InputsForm
interface FigmaInputsFormProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "dc0f44eeea7cb30d4be08240bf946cfac382cfbc",
  mapper(figma: FigmaInputsFormProps) {
    return <Form>{figma.$children}</Form>;
  },
});
