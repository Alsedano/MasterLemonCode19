import React from "react";
import { CenteredLayout } from "@/layouts";
import { ListContainer } from "@/pods/listGitHub";
import { SearchContainer } from "@/pods/search";
import { ErrorBoundary } from "@/pods/error404";
import { SearchContext } from "@/pods/search/search.provider";
import { ListHeaderContainer } from "@/pods/listHeader";

export const ListScene: React.FC = () => {
  const { searchText } = React.useContext(SearchContext);

  return (
    <CenteredLayout>
      <ErrorBoundary key={searchText}>
        <ListHeaderContainer />
        <SearchContainer />
        <ListContainer />
      </ErrorBoundary>
    </CenteredLayout>
  );
};
