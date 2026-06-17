import { mockOrders, Order } from "@/mock/mockData";
import React, { PropsWithChildren } from "react";

interface OrderContextModel {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

export const OrderContext = React.createContext<OrderContextModel>({
  order: {
    orderNumber: 0,
    supplier: "",
    date: new Date(),
    totalOrder: 0,
    status: 0,
    orderLines: [],
  },
  setOrder: () => {},
});

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [order, setOrder] = React.useState(mockOrders);

  return <OrderContext value={{ order: order, setOrder: setOrder }}>{children}</OrderContext>;
};
