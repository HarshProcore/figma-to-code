import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Switch } from "@/components/ui/switch";

// ❖ Switch
interface FigmaSwitchProps extends BaseFigmaProps {
  Label?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "7bd38bd7b992a30e8f09992b7d7f49446628ca6a",
  mapper(figma: FigmaSwitchProps) {
    return <Switch>{figma.Label} </Switch>;
  },
});
