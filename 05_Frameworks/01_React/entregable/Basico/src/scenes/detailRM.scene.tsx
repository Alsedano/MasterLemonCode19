import React from "react";
import { CenteredLayout } from "@/layouts";
import { DetailRickMortyContainer } from "@/pods/detailRickMorty";

export const DetailRickMortyScene: React.FC = () => {
  return (
    <CenteredLayout>
      <DetailRickMortyContainer />
    </CenteredLayout>
  );
};
