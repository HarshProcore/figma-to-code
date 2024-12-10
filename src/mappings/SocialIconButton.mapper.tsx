import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { SocialIconButton } from "~/components/socialButtons/SocialIconButton";

// ❖ SocialIconButton
interface FigmaSocialIconButtonProps extends BaseFigmaProps {
  iconName?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "d694d3af152ad52c06393b7fbf2a95c65479e690",
  mapper(figma: FigmaSocialIconButtonProps) {
    return <SocialIconButton iconName={figma.iconName ?? ""} />;
  },
});
