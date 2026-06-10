import React from "react";
import { List } from "./list.component";
import { SearchContext } from "../search/search.provider";
import { getGitHubMembers } from "./repository";
import { GridDataSource, GridGetRowsParams } from "@mui/x-data-grid";

export const ListContainer: React.FC = () => {
  const { searchText } = React.useContext(SearchContext);
  const [error, setError] = React.useState(null);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  React.useEffect(() => {
    getGitHubMembers(searchText, 0)
      .then((data) => {
        setPaginationModel((prev) => ({
          ...prev,
          pageSize: data.totalCount,
        }));
      })
      .catch(setError);
  }, [searchText]);

  const customDataSource: GridDataSource = {
    getRows: async (params: GridGetRowsParams) => {
      const data = await getGitHubMembers(
        searchText,
        params.paginationModel?.page || 0,
      );

      return {
        rows: data.members,
        rowCount: data.totalCount,
      };
    },
  };

  if (error) throw error;

  return (
    <List
      customDataSource={customDataSource}
      paginationModel={paginationModel}
    />
  );
};
