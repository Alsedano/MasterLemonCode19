import { mockOrders, Order } from "@/mock/mockData";
import React, { PropsWithChildren } from "react";

interface OrderContextModel {
  order: Order;
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
});

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <OrderContext value={{ order: mockOrders }}>{children}</OrderContext>;
};
