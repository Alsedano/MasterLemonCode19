import React from "react";
import { MemberEntity } from "./list.vm";
import { MemberRow } from "./components/member-row.component";
import { TitleList } from "./components/title-list.component";
import { Avatar, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router";
import { GITHUB } from "@/common/constants";

interface Props {
  members: MemberEntity[];
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
      const { characters } = useParams();

      if (characters === GITHUB) console.log("Git_Hub");
      else console.log("Rick_Morty");

      return (
        <Link
          to={
            characters === GITHUB
              ? routes.detail(rowLogin)
              : routes.detailRM(rowId)
          }
        >
          {rowLogin}
        </Link>
      );
    },
  },
];

export const List: React.FC<Props> = ({ members }) => {
  return (
    <>
      {/* <div className="list-user-list-container">
        <TitleList />

        {members.map((member) => (
          <MemberRow key={member.id} member={member}></MemberRow>
        ))}
      </div> */}

      <Box sx={{ height: "100%", width: "80%" }}>
        <DataGrid
          rows={members}
          columns={columns}
          rowCount={}
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
