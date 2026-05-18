import React from "react";
import { MemberEntity } from "./list.vm";
import { Header } from "@/scenes/header";
import { MemberRow } from "./components/member-row.component";
import { TitleList } from "./components/title-list.component";
import { SearchOrganization } from "../search/searchOrganization.component";

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = ({ members }) => {
  return (
    <>
      <Header />

      <div className="list-user-list-container">
        <TitleList />
        {members.map((member) => (
          <MemberRow key={member.id} member={member}></MemberRow>
        ))}
      </div>
    </>
  );
};
