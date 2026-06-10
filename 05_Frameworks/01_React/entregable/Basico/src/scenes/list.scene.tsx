import React from "react";
import { AppLayout } from "@/layouts";
import { ListContainer } from "@/pods/listGitHub";
import { SearchContainer } from "@/pods/search";
import { HeaderButtons } from "@/pods/header/components/headerButtons.component";
import { HeaderContainer } from "@/pods/header";
import { ErrorBoundary } from "@/pods/error404";
import { SearchContext } from "@/pods/search/search.provider";

export const ListScene: React.FC = () => {
  const { searchText } = React.useContext(SearchContext);

  return (
    <AppLayout
      header={
        <HeaderContainer
          title={<></>}
          navButtons={<HeaderButtons />}
          search={<SearchContainer />}
        />
      }
    >
      <ErrorBoundary key={searchText}>
        <ListContainer />
      </ErrorBoundary>
    </AppLayout>
  );
};
