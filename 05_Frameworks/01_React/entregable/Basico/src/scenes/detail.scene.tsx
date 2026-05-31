import React from "react";
import { AppLayout, CenteredLayout } from "@/layouts";
import { DetailContainer } from "@/pods/detail";
import { Header } from "@/pods/header/header.component";
import { SearchContainer } from "@/pods/search";

export const DetailScene: React.FC = () => {
  return (
    <AppLayout header={<Header title="Details" search={<></>} />}>
      <DetailContainer />
    </AppLayout>
  );
};
