import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Form } from "@procore/core-react";

// ❖ EmailContainer
interface FigmaEmailContainerProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "1c29afca020fdf07a488558d954a5dd6edbe0903",
  mapper(figma: FigmaEmailContainerProps) {
    return (
       <Form.Row>{figma.$children}</Form.Row>
    );
  },
});
