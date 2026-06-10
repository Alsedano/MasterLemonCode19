import React from "react";
import { MemberEntity } from "./list.vm";
import { Avatar, Box } from "@mui/material";
import { DataGrid, GridColDef, GridFilterModel } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
  members: MemberEntity[];
  membersCount: number;
  loading: boolean;
  handleFilterModelChange: (newModel: GridFilterModel) => void;
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
  handleFilterModelChange,
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
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          onFilterModelChange={handleFilterModelChange}
          paginationMode="server"
          pagination
          pageSizeOptions={[members.length]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};
