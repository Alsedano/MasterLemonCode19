import React from "react";
import { ListRM } from "./list.component";
import { getRickMortyMemberByName, getRickMortyMembers } from "./repository";
import { useDebounce } from "@/hooks/debounce.hook";
import { MemberRoot } from "./list.vm";
import { GridFilterModel } from "@mui/x-data-grid";

export const ListRickMortyContainer: React.FC = () => {
  const [memberRoot, setMemberRoot] = React.useState<MemberRoot>();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const members = memberRoot?.members ?? [];

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 30,
    page: 0,
  });

  const debouncedPaginationModel = useDebounce(paginationModel, 500);

  React.useEffect(() => {
    getRickMortyMembers(paginationModel.page)
      .then((data) => {
        setMemberRoot(data);
        setPaginationModel((prev) => ({
          ...prev,
          pageSize: Math.min(data.totalCount, 30),
        }));
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [debouncedPaginationModel.page]);

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });

  const getRickAndMortyFIlteredByName = (name: string) => {
    getRickMortyMemberByName(name)
      .then(setMemberRoot)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const handleFilterModelChange = React.useCallback(
    (newModel: GridFilterModel) => {
      setFilterModel(newModel);

      const quickFilterNameValue = newModel.quickFilterValues?.[0];

      if (quickFilterNameValue) {
        console.log("Buscando en servidor:", quickFilterNameValue);
        getRickAndMortyFIlteredByName(quickFilterNameValue);
      }
    },
    [],
  );

  if (error) throw error;

  return (
    <ListRM
      members={members}
      membersCount={memberRoot?.totalCount ?? members.length}
      loading={loading}
      paginationModel={paginationModel}
      setPaginationModel={setPaginationModel}
      handleFilterModelChange={handleFilterModelChange}
    />
  );
};
