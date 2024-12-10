import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Background } from "@/components/custom/Background";

// ❖ Background
interface FigmaBackgroundProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "e4b396256ecf53c58e0638deb18e8f1399d69d0c",
  mapper(figma: FigmaBackgroundProps) {
    return <Background>{figma.$children}</Background>;
  },
});
