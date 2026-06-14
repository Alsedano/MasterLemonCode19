import React from "react";
import { AppLayout, ListLayout } from "@/layouts";
import { ListContainer, PictureInfo } from "@/pods/list";
import { HeaderListContainer } from "@/pods/list/components/headerList";
import { ShoppingProvider } from "@/core/shopping.context";

interface Props {
  data: PictureInfo[];
}

export const ListScene: React.FC<Props> = ({ data }) => {
  /* const { searchText } = React.useContext(SearchContext); */

  return (
    <ListLayout>
      <HeaderListContainer />
      <ListContainer pics={data} />
    </ListLayout>
  );
};
