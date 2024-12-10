import { Button } from "@/components/ui/button";
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

// ❖ Button
interface FigmaButtonProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "eadad8a39bb5f85e6fa52db6c9570c2ad578749e",
  mapper(figma: FigmaButtonProps) {
    return <Button>{figma.$children}</Button>;
  },
});
