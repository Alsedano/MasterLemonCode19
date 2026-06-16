import { OrderLine } from "@/mock/mockData";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef, GridRowId, GridRowSelectionModel } from "@mui/x-data-grid";
import React from "react";

interface Props {
  orders: OrderLine[];
  processRowUpdate: (newRow: OrderLine, oldRow: OrderLine) => OrderLine;
  setSelectedOrderLineIds;
}

export const DetallePedido: React.FC<Props> = ({
  orders,
  processRowUpdate,
  setSelectedOrderLineIds,
}) => {
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>({
    type: "include",
    ids: new Set(),
  });

  const columns: GridColDef[] = [
    { field: "estado", headerName: "Estado", width: 150 },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 500,
    },
    { field: "importe", headerName: "Importe", editable: true, flex: 1 },
  ];

  const handleRowSelection = (newRowSelectionModel: GridRowSelectionModel) => {
    console.log(`DetallePedido - Row selection ${newRowSelectionModel.ids}`);

    setSelectedOrderLineIds(newRowSelectionModel.ids);
    setRowSelectionModel(newRowSelectionModel);
  };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={orders}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionExcludeModel
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={handleRowSelection}
        sx={{ border: 0 }}
        processRowUpdate={processRowUpdate}
        disableColumnFilter
        disableColumnMenu
        disableColumnResize
        disableColumnSelector
        disableColumnSorting
        disableDensitySelector
        disableRowSelectionOnClick
      />
    </Paper>
  );
};
