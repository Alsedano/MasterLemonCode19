import React from "react";
import { MemberEntity, MemberRoot } from "./list.vm";
import { ListRM } from "./list.component";
import { OrgContext } from "../search/search.provider";
import { getRickMortyMembers } from "./repository";
import { useParams } from "react-router-dom";
import { useDebounce } from "@/hooks/debounce.hook";

export const ListRickMortyContainer: React.FC = () => {
  const [memberRoot, setMemberRoot] = React.useState<MemberRoot>();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const members = memberRoot?.members ?? [];

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  const { debouncedPaginationModel } = useDebounce(paginationModel, 500);

  React.useEffect(() => {
    getRickMortyMembers(paginationModel.page, paginationModel.pageSize)
      .then(setMemberRoot)
      .catch(setError)
      .finally(() => setLoading(false));
  }, debouncedPaginationModel);

  if (error) throw error;

  return (
    <ListRM
      members={members}
      membersCount={memberRoot?.totalCount ?? members.length}
      loading={loading}
      paginationModel={paginationModel}
      setPaginationModel={setPaginationModel}
    />
  );
};
