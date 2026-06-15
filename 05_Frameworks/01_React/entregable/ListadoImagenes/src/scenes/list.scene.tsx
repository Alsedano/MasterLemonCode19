import React from "react";
import { ListLayout } from "@/layouts";
import { ListContainer, PictureInfo } from "@/pods/list";
import { HeaderListContainer } from "@/pods/list/components/headerList";

interface Props {
  data: PictureInfo[];
}

export const ListScene: React.FC<Props> = ({ data }) => {
  return (
    <ListLayout>
      <HeaderListContainer />
      <ListContainer pics={data} />
    </ListLayout>
  );
};
