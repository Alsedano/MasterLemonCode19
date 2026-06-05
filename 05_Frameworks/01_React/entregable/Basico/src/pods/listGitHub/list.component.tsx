import React from "react";
import { MemberEntity } from "./list.vm";
import { Avatar, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
  members: MemberEntity[];
  loading: boolean;
  paginationModel?: { pageSize: number; page: number };
  setPaginationModel?: React.Dispatch<
    React.SetStateAction<{
      pageSize: number;
      page: number;
    }>
  >;
}

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

export const List: React.FC<Props> = ({ members, loading }) => {
  const rowCount = members.length;

  return (
    <>
      <Box sx={{ height: "100%", width: "80%" }}>
        <DataGrid
          rows={members}
          columns={columns}
          rowCount={rowCount}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};
