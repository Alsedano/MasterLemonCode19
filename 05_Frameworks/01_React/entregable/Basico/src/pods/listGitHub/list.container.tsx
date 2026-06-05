import React from "react";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";
import { OrgContext } from "../search/search.provider";
import { getGitHubMembers } from "./repository";
import { useParams } from "react-router-dom";

export const ListContainer: React.FC = () => {
  const { characters } = useParams();
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization } = React.useContext(OrgContext);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getGitHubMembers(organization)
      .then(setMembers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [organization, characters]);

  if (error) throw error;

  return <List members={members} loading={loading} />;
};
