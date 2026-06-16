import React from "react";
import { Pedido } from "./pedido.component";
import { OrderProvider } from "@/core/order.context";
import { ImporteTotalProvider } from "@/core/importeTotal.context";

export const PedidoContainer: React.FC = () => {
  return (
    <>
      <OrderProvider>
        <ImporteTotalProvider>
          <Pedido />
        </ImporteTotalProvider>
      </OrderProvider>
    </>
  );
};
