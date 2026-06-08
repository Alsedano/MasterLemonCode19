import React from "react";
import { ListRM } from "./list.component";
import { getRickMortyMembers } from "./repository";
import { useDebounce } from "@/hooks/debounce.hook";
import { MemberRoot } from "./list.vm";

export const ListRickMortyContainer: React.FC = () => {
  const [memberRoot, setMemberRoot] = React.useState<MemberRoot>();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const members = memberRoot?.members ?? [];

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  const debouncedPaginationModel = useDebounce(paginationModel, 500);

  React.useEffect(() => {
    getRickMortyMembers(paginationModel.page)
      .then(setMemberRoot)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [debouncedPaginationModel.page]);

  console.log(`Se renderiza componente con page: ${paginationModel.page}`);

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
