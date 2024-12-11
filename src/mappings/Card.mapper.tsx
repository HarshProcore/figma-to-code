import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { AppCard } from "@/components/custom/AppCard";

// ❖ Card
interface FigmaCardProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "eb2867471cce637844d42bb81db9c4bc87c079f1",
  mapper(figma: FigmaCardProps) {
    return <AppCard>{figma.$children}</AppCard>;
  },
});
