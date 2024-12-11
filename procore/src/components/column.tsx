import React from "react";
import { ColumnDefinition } from "@procore/data-table";

export interface ColumnProps {
  field: string;
  headerName: string;
}

export function Column({ field, headerName }: ColumnProps) {
  const colDef: ColumnDefinition = { field, headerName };

  return <template data-colDef={colDef}></template>;
}
