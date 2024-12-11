import { Builder } from "@builder.io/react";
import { Column } from "./components/column";
import { Datatable } from "./components/datatable";

Builder.registerComponent(Datatable, {
  name: "Datatable",
  inputs: [
    {
      name: "colDefs",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "ColumnDefinition<any, React.FC<ICellRendererParams<any, TValue, any>>, any, React.ForwardRefExoticComponent<ICellEditorParams<any, TValue, any>>, any, any, string | number | LocationFilterOpt | { ...; } | { ...; }, string, any>[]",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(Column, {
  name: "Column",
  inputs: [
    {
      name: "field",
      type: "string",
      required: true,
    },
  ],
});
