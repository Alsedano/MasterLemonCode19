import React from "react";
import { Avatar, Box } from "@mui/material";
import { DataGrid, GridColDef, GridDataSource } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
  customDataSource: GridDataSource;
  paginationModel: { pageSize: number; page: number };
}

export const List: React.FC<Props> = ({
  customDataSource,
  paginationModel,
}) => {
  const columns: GridColDef[] = [
    {
      field: "avatarUrl",
      headerName: "Avatar",
      width: 90,
      renderCell: (params) => <Avatar alt="" src={params.value} />,
    },
    { field: "id", headerName: "Id", width: 150 },
    {
      field: "login",
      headerName: "Login",
      flex: 1,
      renderCell: (params) => {
        const rowLogin = params.row.login;

        return <Link to={routes.detail(rowLogin)}>{rowLogin}</Link>;
      },
    },
  ];

  return (
    <>
      <Box sx={{ height: "100%", width: "80%" }}>
        <DataGrid
          columns={columns}
          dataSource={customDataSource}
          pagination
          initialState={{
            pagination: {
              paginationModel: { pageSize: paginationModel.pageSize, page: 0 },
            },
          }}
        />
      </Box>
    </>
  );
};
