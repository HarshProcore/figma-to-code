import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { InputField } from "@/components/auth/components/InputField";

// ❖ InputField
interface FigmaInputFieldProps extends BaseFigmaProps {
  Placeholder?: string;
  Label?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "fc6ec0fe31c1696b04c9969bf6954c9de84efd90",
  mapper(figma: FigmaInputFieldProps) {
    return (
      <InputField
        label={figma.Label ?? ""}
        placeholder={figma.Placeholder ?? ""}
        type="text"
        value=""
      />
    );
  },
});
