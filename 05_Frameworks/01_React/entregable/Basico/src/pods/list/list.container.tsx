import React from "react";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersEntityToVm } from "./list.mappers";
import { OrgContext } from "../search/search.provider";

export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization } = React.useContext(OrgContext);

  React.useEffect(() => {
    getMembers(organization).then(mapMembersEntityToVm).then(setMembers);
  }, [organization]);

  return <List members={members}></List>;
};
