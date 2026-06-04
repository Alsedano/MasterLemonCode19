import React from "react";
import { AppLayout } from "@/layouts";
import { DetailRickMortyContainer } from "@/pods/detailRickMorty";
import { HeaderContainer } from "@/pods/header";

export const DetailRickMortyScene: React.FC = () => {
  return (
    <AppLayout
      header={
        <HeaderContainer
          title={<h2 className="detailTitle">Details</h2>}
          navButtons={<></>}
          search={<></>}
        />
      }
    >
      <DetailRickMortyContainer />
    </AppLayout>
  );
};
