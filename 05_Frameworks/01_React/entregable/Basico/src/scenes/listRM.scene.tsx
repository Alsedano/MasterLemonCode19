import React from "react";
import { AppLayout } from "@/layouts";
import { SearchContainer } from "@/pods/search";
import { HeaderButtons } from "@/pods/header/components/headerButtons.component";
import { useParams } from "react-router-dom";
import { RICK_MORTY } from "@/common/constants";
import { HeaderContainer } from "@/pods/header";
import { ListRickMortyContainer } from "@/pods/listRickMorty";

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
      <ListRickMortyContainer />
    </AppLayout>
  );
};
