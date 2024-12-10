import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ColoredBg } from "@/components/custom/ColoredBg";

// ❖ ColoredBg
interface FigmaColoredBgProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "c77d617e2b43b7e4a991efc8a6e7487afef8c0c9",
  mapper(figma: FigmaColoredBgProps) {
    return <ColoredBg />;
  },
});
