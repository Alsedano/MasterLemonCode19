import React from "react";
import { ShoppingCart } from "./shoppingCart.component";
import { ShoppingContext } from "@/core";
import { mockDataKitties, mockDataPuppies } from "@/mock/mockData";
import { PictureInfo } from "../list";

export const ShoppingCartContainer: React.FC = () => {
  const { itemIds, setItemIds } = React.useContext(ShoppingContext);
  const [items, setItems] = React.useState<PictureInfo[]>([]);

  let kitties: PictureInfo[] = [];
  let puppies: PictureInfo[] = [];

  React.useEffect(() => {
    console.log(`ShoppingCartContainer -useEffect ${itemIds}`);
    kitties = itemIds
      .map((id) => mockDataKitties.find((kittie) => kittie.id === id))
      .filter((kittie): kittie is PictureInfo => kittie !== undefined);

    puppies = itemIds
      .map((id) => mockDataPuppies.find((puppie) => puppie.id === id))
      .filter((puppie): puppie is PictureInfo => puppie !== undefined);

    const newItems = kitties.concat(puppies);
    setItems(newItems);
  }, [itemIds]);

  const handleDeleteItem = (id: number) => {
    const index = itemIds.indexOf(id);
    itemIds.splice(index, 1);
    setItemIds([...itemIds]);
  };

  return <ShoppingCart items={items} handleDeleteItem={handleDeleteItem} />;
};
