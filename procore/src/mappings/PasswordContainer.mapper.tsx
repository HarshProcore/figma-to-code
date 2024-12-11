import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Form } from "@procore/core-react";

// ❖ PasswordContainer
interface FigmaPasswordContainerProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "e21c8556bc501a0c56c6ec152962b15bbf16d1ac",
  mapper(figma: FigmaPasswordContainerProps) {
     return <Form.Row>{figma.$children}</Form.Row>;
  },
});
