import React from "react";
import { AppLayout, CenteredLayout } from "@/layouts";
import { DetailContainer } from "@/pods/detail";
import { Header } from "@/pods/header/header.component";

export const DetailScene: React.FC = () => {
  return (
    <AppLayout
      header={
        <Header title={<h2>Details</h2>} navButtons={<></>} search={<></>} />
      }
    >
      <DetailContainer />
    </AppLayout>
  );
};
