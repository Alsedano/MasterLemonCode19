import React from "react";
import { AppLayout } from "@/layouts";
import { ListContainer } from "@/pods/list";
import { SearchContainer } from "@/pods/search";
import { HeaderButtons } from "@/pods/header/components/headerButtons.component";
import { useParams } from "react-router-dom";
import { RICK_MORTY } from "@/common/constants";
import { HeaderContainer } from "@/pods/header";

export const ListScene: React.FC = () => {
  const { characters } = useParams();

  return (
    <AppLayout
      header={
        <HeaderContainer
          title={<></>}
          navButtons={<HeaderButtons />}
          search={characters == RICK_MORTY ? <></> : <SearchContainer />}
        />
      }
    >
      <ListContainer />
    </AppLayout>
  );
};
