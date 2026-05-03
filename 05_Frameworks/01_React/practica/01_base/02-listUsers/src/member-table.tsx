import React from "react";
import { MemberEntity } from "./model";
import { MemberTableRow } from "./member-grid-row";
import { Header } from "./header";

export const MemberTable = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <div className="user-list-container">
      <Header />
      {members.map((member: MemberEntity) => (
        <MemberTableRow key={member.id} member={member}></MemberTableRow>
      ))}
    </div>
  );
};
