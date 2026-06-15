import { Order } from "@/mock/mockData";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

interface Props {
  orders: Order[];
}

export const DetallePedido: React.FC<Props> = ({ orders }) => {
  const columns: GridColDef[] = [
    { field: "estado", headerName: "Estado", width: 150 },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 500,
    },
    { field: "importe", headerName: "Importe", editable: true, flex: 1 },

    /* {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    }, */
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={orders}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5]}
        checkboxSelection
        sx={{ border: 0 }}
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
