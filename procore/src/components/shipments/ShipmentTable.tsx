import * as React from "react";
import styled from "styled-components";
import { Datatable } from "@/components/datatable";
import { Column } from "@/components/column";
import { ShipmentTableColumns } from "./ShipmentTableColumns";

interface ShipmentTableProps {
  data: Array<{
    shipment: string;
    sourceDocument: string;
    status: string;
    estimatedDeliveryDate: string;
    lineItems: number;
    vendorName: string;
    destination: string;
  }>;
}

export function ShipmentTable({ data }: ShipmentTableProps) {
  return (
    <StyledDatatable>
      {ShipmentTableColumns.map((column) => (
        <StyledColumn
          key={column.field}
          field={column.field}
          headerName={column.headerName}
        />
      ))}
    </StyledDatatable>
  );
}

const StyledDatatable = styled(Datatable)`
  width: 100%;
  border-radius: 8px;
`;

const StyledColumn = styled(Column)`
  width: 100%;
  flex: 1;
  flex-basis: 0%;
`;
