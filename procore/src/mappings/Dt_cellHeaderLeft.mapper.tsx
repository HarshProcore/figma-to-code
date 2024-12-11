import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Column } from "../components/column";

// ❖ dt_cell-header-left
interface FigmaDt_cellHeaderLeftProps extends BaseFigmaProps {
  "Sort Direction"?: ChildrenNode;
  Tooltip?: boolean;
  "Expand Rows"?: boolean;
  "Multiple Sort"?: boolean;
  Checkbox?: boolean;
  Expandable?: boolean;
  "Expand/Close Groups"?: ChildrenNode; // when "Expand Rows" is true
  Sort?: boolean;
  "Type Your Header Text Here"?: string;
  "Expand/Collapse Column"?: ChildrenNode; // when "Expandable" is true
  State?: "Default" | "Hover";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "ec1711025d1b0445583f2ee43653cb818a4e4cd3",
  mapper(figma: FigmaDt_cellHeaderLeftProps) {
    return (
      <Column
        field={figma["Type Your Header Text Here"] ?? ""}
        headerName={figma["Type Your Header Text Here"] ?? ""}
      />
    );
  },
});
