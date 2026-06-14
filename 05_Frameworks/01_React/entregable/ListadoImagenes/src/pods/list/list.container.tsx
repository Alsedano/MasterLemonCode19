import React from "react";
import { List } from "./list.component";
import { PictureInfo } from "./list.vm";
import { ShoppingContext } from "@/core";

interface Props {
  pics: PictureInfo[];
}

export const ListContainer: React.FC<Props> = ({ pics }) => {
  const { itemIds, setItemIds } = React.useContext(ShoppingContext);

  const handleBuyItem = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const index = itemIds.indexOf(id);
    if (event.target.checked && index < 0) {
      setItemIds([...itemIds, id]);
    } else {
      if (index > -1) {
        itemIds.splice(index, 1);
        setItemIds([...itemIds]);
      }
    }
  };

  const picsSelected = pics.map((pic) => ({
    ...pic,
    selected: itemIds.includes(pic.id),
  }));

  return <List pics={picsSelected} handleBuyItem={handleBuyItem} />;
};
