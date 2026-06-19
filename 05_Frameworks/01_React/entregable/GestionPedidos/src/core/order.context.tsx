import { mockOrders, Order } from "@/mock/mockData";
import React, { PropsWithChildren } from "react";
import { OrderContextModel, createDefaultOrder } from "./order.vm";

export const OrderContext = React.createContext<OrderContextModel>({
  order: createDefaultOrder(),
  setOrder: () => {},
});

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [order, setOrder] = React.useState(mockOrders);

  return <OrderContext value={{ order: order, setOrder: setOrder }}>{children}</OrderContext>;
};
