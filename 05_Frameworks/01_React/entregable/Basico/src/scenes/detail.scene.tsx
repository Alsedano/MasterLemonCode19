import React from "react";
import { AppLayout, CenteredLayout } from "@/layouts";
import { DetailContainer } from "@/pods/detail";
import { Header } from "@/pods/header/header.component";
import { HeaderContainer } from "@/pods/header";

export const DetailScene: React.FC = () => {
  return (
    <AppLayout
      header={
        <HeaderContainer
          title={
            <>
              <h2 className="detailTitle">Details</h2>
            </>
          }
          navButtons={<></>}
          search={<></>}
        />
      }
    >
      <DetailContainer />
    </AppLayout>
  );
};
