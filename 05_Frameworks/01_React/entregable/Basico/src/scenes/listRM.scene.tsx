import React from "react";
import { CenteredLayout } from "@/layouts";
import { ListRickMortyContainer } from "@/pods/listRickMorty";
import { ErrorBoundary } from "@/pods/error404";
import { ListHeaderContainer } from "@/pods/listHeader";

export const ListRickMortyScene: React.FC = () => {
  return (
    <CenteredLayout>
      <ErrorBoundary>
        <ListHeaderContainer />
        <ListRickMortyContainer />
      </ErrorBoundary>
    </CenteredLayout>
  );
};
