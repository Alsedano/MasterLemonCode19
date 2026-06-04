import React from "react";
import { MemberEntity } from "./list.vm";
import { ListRM } from "./list.component";
import { OrgContext } from "../search/search.provider";
import { getRickMortyMembers } from "./repository";
import { Error404 } from "../error404/error404.component";
import { useParams } from "react-router-dom";

export const ListRickMortyContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  React.useEffect(() => {
    getRickMortyMembers(paginationModel.page, paginationModel.pageSize).then(
      setMembers,
    );
  }, [paginationModel]);

  if (members.length == 0) return <Error404 />;
  return (
    <ListRM
      members={members}
      paginationModel={paginationModel}
      setPaginationModel={setPaginationModel}
    />
  );
};
