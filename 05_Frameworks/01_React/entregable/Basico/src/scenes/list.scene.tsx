import React from "react";
import { AppLayout } from "@/layouts";
import { ListContainer } from "@/pods/list";
import { Header } from "../pods/header/header.component";
import { SearchContainer } from "@/pods/search";

export const ListScene: React.FC = () => {
  return (
    <AppLayout
      header={<Header title="List of members" search={<SearchContainer />} />}
    >
      <ListContainer />
    </AppLayout>
  );
};
