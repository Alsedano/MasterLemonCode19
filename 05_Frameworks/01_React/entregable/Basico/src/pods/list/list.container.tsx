import React from "react";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";
import { OrgContext } from "../search/search.provider";
import { getGitHubMembers, getRickMortyMembers } from "./repository";
import { Error404 } from "../error404/error404.component";

interface Props {
  showRickMortyMembers: boolean;
}

export const ListContainer: React.FC<Props> = ({ showRickMortyMembers }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization } = React.useContext(OrgContext);

  console.log(`organization value: ${organization}`);
  console.log(`showRickMortyMembers value: ${showRickMortyMembers}`);

  React.useEffect(() => {
    if (showRickMortyMembers) {
      getRickMortyMembers().then(setMembers);
    } else getGitHubMembers(organization).then(setMembers);
  }, [organization, showRickMortyMembers]);

  if (members.length == 0) return <Error404 />;
  return <List members={members} />;
};
