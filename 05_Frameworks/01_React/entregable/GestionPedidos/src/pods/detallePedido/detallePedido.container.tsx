import React from "react";
import { DetallePedido } from "./detallePedido.component";
import { mockOrders } from "@/mock/mockData";

export const DetallePedidoContainer: React.FC = () => {
  return <DetallePedido orders={mockOrders} />;
};
