import React from "react";
import { AppLayout } from "@/layouts";
import { Header } from "@/pods/header/header.component";
import { DetailRickMortyContainer } from "@/pods/detailRickMorty";

export const DetailRickMortyScene: React.FC = () => {
  return (
    <AppLayout
      header={
        <Header title={<h2>Details</h2>} navButtons={<></>} search={<></>} />
      }
    >
      <DetailRickMortyContainer />
    </AppLayout>
  );
};
