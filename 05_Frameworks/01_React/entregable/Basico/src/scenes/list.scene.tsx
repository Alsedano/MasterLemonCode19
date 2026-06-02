import React from "react";
import { AppLayout } from "@/layouts";
import { ListContainer } from "@/pods/list";
import { Header } from "../pods/header/header.component";
import { SearchContainer } from "@/pods/search";
import { HeaderButtons } from "@/pods/header/components/headerButtons.component";

interface Props {
  showRickMortyMembers: boolean;
}

export const ListScene: React.FC<Props> = ({ showRickMortyMembers }) => {
  return (
    <AppLayout
      header={
        <Header
          title={<></>}
          navButtons={<HeaderButtons />}
          search={showRickMortyMembers ? <></> : <SearchContainer />}
        />
      }
    >
      <ListContainer showRickMortyMembers={showRickMortyMembers} />
    </AppLayout>
  );
};
