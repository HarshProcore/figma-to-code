import {
  figmaMapping,
  FigmaNode,
  type BaseFigmaProps,
} from "@builder.io/dev-tools/figma";
import { Datatable } from "@/components/datatable";
import { ColumnDefinition, ServerSideGetRowsParams } from "@procore/data-table";

// ❖ Datatable
interface FigmaDatatableProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "fc04a15a23b6bdfa4f92f0936b22c556366587d9",
  mapper(figma: FigmaDatatableProps) {
    return (
      <Datatable>
        {figma
          .$findOneByName("columns")
          ?.$children.map((c) => c.$findOneByName("dt_cell-header-left"))}
      </Datatable>
    );
  },
});
