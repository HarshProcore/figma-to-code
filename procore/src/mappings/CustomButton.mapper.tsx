import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Button } from "@procore/core-react";
import { ButtonVariant } from "@procore/core-react/dist/Button/Button.types";

// ❖ CustomButton
interface FigmaCustomButtonProps extends BaseFigmaProps {
  variant?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "a195f34c7d00609fb46322a05056278c6290bce0",
  mapper(figma: FigmaCustomButtonProps) {
    const buttonVariant = figma.variant as ButtonVariant;
    return <Button variant={buttonVariant}>{figma.$children}</Button>;
  },
});
