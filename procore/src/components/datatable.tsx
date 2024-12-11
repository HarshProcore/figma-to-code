import {
  ColumnDefinition,
  ServerSideDataTable,
  ServerSideGetRowsParams,
  SuccessParams,
} from "@procore/data-table";
import React from "react";
import { ColumnProps } from "./column";
import { Box, Flex } from "@procore/core-react";

interface DatatableProps {
  // colDefs: ColumnDefinition[];
  children?: React.ReactNode[] | React.ReactNode;
  // onServerSideDataRequest?: (params: ServerSideGetRowsParams) => Promise<void>;
  fetchRows?: (params: ServerSideGetRowsParams) => Promise<SuccessParams>;
}

export function Datatable(props: DatatableProps) {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const colDefs: ColumnDefinition[] =
    children?.map?.((c) => {
      // @ts-ignore
      const props = c.props as ColumnProps;
      return props;
    }) || [];

  const onServerSideDataRequest = async (params: ServerSideGetRowsParams) => {
    let fetchRows = props.fetchRows;
    if (!fetchRows) {
      fetchRows = async () => {
        return {
          rowData: [],
          rowCount: 0,
        };
      };
    }

    const { rowCount, rowData } = await fetchRows(params);
    params.onSuccess({
      rowCount,
      rowData,
    });
  };

  // @ts-ignore
  return (
    <ServerSideDataTable
      columnDefinitions={colDefs}
      onServerSideDataRequest={onServerSideDataRequest}
    >
      <Flex
        style={{
          height: "100%",
          width: "100%",
        }}
        alignItems="stretch"
      >
        <Box flex="1" display="flex-column" alignItems="stretch">
          <ServerSideDataTable.Table />
        </Box>
        <Flex flex="0 1 0px" alignItems="stretch">
          <ServerSideDataTable.ContextPanel
            style={{
              marginLeft: "16px",
            }}
          />
        </Flex>
      </Flex>
    </ServerSideDataTable>
  );
}
