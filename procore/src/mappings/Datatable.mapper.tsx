import {
  figmaMapping,
  FigmaNode,
  type BaseFigmaProps,
} from "@builder.io/dev-tools/figma";
import { Datatable } from "../components/datatable";
import { ColumnDefinition, ServerSideGetRowsParams } from "@procore/data-table";

// ❖ Datatable
interface FigmaDatatableProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "fc04a15a23b6bdfa4f92f0936b22c556366587d9",
  mapper(figma: FigmaDatatableProps) {
    const fetchRows = async (params: ServerSideGetRowsParams) => {
      return {
        rowData: [
          {
            id: "1",
            name: "John Doe",
          },
          {
            id: "2",
            name: "Jane Doe",
          },
        ],
        rowCount: 2,
      };
    };

    return (
      <Datatable fetchRows={fetchRows}>
        {figma.$findOneByName("columns")?.$children}
      </Datatable>
    );
  },
});
