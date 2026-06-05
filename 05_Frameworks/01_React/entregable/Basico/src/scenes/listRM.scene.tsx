import React from "react";
import { AppLayout } from "@/layouts";
import { HeaderButtons } from "@/pods/header/components/headerButtons.component";
import { HeaderContainer } from "@/pods/header";
import { ListRickMortyContainer } from "@/pods/listRickMorty";
import { ErrorBoundary } from "@/pods/error404";

export const ListRickMortyScene: React.FC = () => {
  return (
    <AppLayout
      header={
        <HeaderContainer
          title={<></>}
          navButtons={<HeaderButtons />}
          search={<></>}
        />
      }
    >
      <ErrorBoundary>
        <ListRickMortyContainer />
      </ErrorBoundary>
    </AppLayout>
  );
};
