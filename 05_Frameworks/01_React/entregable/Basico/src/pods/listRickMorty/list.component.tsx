import React from "react";
import { MemberEntity } from "./list.vm";
import { Avatar, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router";
import { GITHUB } from "@/common/constants";

interface Props {
  members: MemberEntity[];
  membersCount: number;
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
      const rowId = params.row.id;
      const rowLogin = params.row.login;

      return <Link to={routes.detailRM(rowId)}>{rowLogin}</Link>;
    },
  },
];

export const ListRM: React.FC<Props> = ({
  members,
  membersCount,
  loading,
  paginationModel,
  setPaginationModel,
}) => {
  return (
    <>
      <Box sx={{ height: "100%", width: "80%" }}>
        <DataGrid
          rowCount={membersCount}
          rows={members}
          columns={columns}
          loading={loading}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10]}
          paginationMode="server"
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};
