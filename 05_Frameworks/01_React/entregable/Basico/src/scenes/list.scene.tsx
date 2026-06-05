import React from "react";
import { AppLayout } from "@/layouts";
import { ListContainer } from "@/pods/listGitHub";
import { SearchContainer } from "@/pods/search";
import { HeaderButtons } from "@/pods/header/components/headerButtons.component";
import { HeaderContainer } from "@/pods/header";
import { ErrorBoundary } from "@/pods/error404";
import { OrgContext } from "@/pods/search/search.provider";

export const ListScene: React.FC = () => {
  const { organization } = React.useContext(OrgContext);

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
      <ErrorBoundary key={organization}>
        <ListContainer />
      </ErrorBoundary>
    </AppLayout>
  );
};
