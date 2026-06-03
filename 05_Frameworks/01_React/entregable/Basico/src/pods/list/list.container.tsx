import React from "react";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";
import { OrgContext } from "../search/search.provider";
import { getGitHubMembers, getRickMortyMembers } from "./repository";
import { Error404 } from "../error404/error404.component";
import { useParams } from "react-router-dom";
import { RICK_MORTY } from "@/common/constants";

export const ListContainer: React.FC = () => {
  const { characters } = useParams();
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization } = React.useContext(OrgContext);

  React.useEffect(() => {
    if (characters == RICK_MORTY) {
      getRickMortyMembers().then(setMembers);
    } else getGitHubMembers(organization).then(setMembers);
  }, [organization, characters]);

  if (characters == RICK_MORTY) {
    return <List members={members} />;
  }

  if (members.length == 0) return <Error404 />;

  return <List members={members} />;
};
