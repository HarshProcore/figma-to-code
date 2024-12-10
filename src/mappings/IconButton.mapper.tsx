import { AppIconButton } from "@/components/custom/IconButton";
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

// ❖ IconButton
interface FigmaIconButtonProps extends BaseFigmaProps {
  label?: string;
  iconName: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "77a71168f3867e1da3646043b8132be57d426c1f",
  mapper(figma: FigmaIconButtonProps) {
    // @ts-expect-error iconName should be valid
    return <AppIconButton label={figma.label} iconName={figma.iconName} />;
  },
});
