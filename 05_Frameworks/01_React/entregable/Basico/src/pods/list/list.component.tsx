import React from "react";
import { MemberEntity } from "./list.vm";
import { MemberRow } from "./components/member-row.component";
import { TitleList } from "./components/title-list.component";
import { Typography } from "@mui/material";

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = ({ members }) => {
  if (members.length === 0) {
    return (
      <>
        {/* It should be a new component Error404, but I dont have too much time :) */}
        <Typography variant="h5" sx={{ fontSize: "4rem", color: "red" }}>
          OOOPs!! No members found
        </Typography>
      </>
    );
  } else {
    return (
      <>
        <div className="list-user-list-container">
          <TitleList />

          {members.map((member) => (
            <MemberRow key={member.id} member={member}></MemberRow>
          ))}
        </div>
      </>
    );
  }
};
