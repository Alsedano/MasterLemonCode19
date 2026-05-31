import React from "react";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";
import { OrgContext } from "../search/search.provider";
import { getMembers } from "./repository";

export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization } = React.useContext(OrgContext);

  React.useEffect(() => {
    getMembers(organization).then(setMembers);
  }, [organization]);

  return <List members={members}></List>;
};
