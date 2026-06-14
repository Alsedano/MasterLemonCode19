import React, { PropsWithChildren } from "react";
import { ShoppingItemsContextModel } from "./shopping.vm";

export const ShoppingContext = React.createContext<ShoppingItemsContextModel>({
  itemIds: [],
  setItemIds: () => {},
});

export const ShoppingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [itemIds, setItemIds] = React.useState<number[]>([]);

  return (
    <ShoppingContext value={{ itemIds, setItemIds }}>
      {children}
    </ShoppingContext>
  );
};
