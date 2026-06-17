import React from "react";
import { Pedido } from "./pedido.component";
import { EstadoProvider, ImporteTotalProvider, OrderProvider } from "@/core";

export const PedidoContainer: React.FC = () => {
  const [selectedOrderLineIds, setSelectedOrderLineIds] = React.useState<number[]>([]);

  return (
    <>
      <OrderProvider>
        <ImporteTotalProvider>
          <EstadoProvider>
            <Pedido
              selectedOrderLineIds={selectedOrderLineIds}
              setSelectedOrderLineIds={setSelectedOrderLineIds}
            />
          </EstadoProvider>
        </ImporteTotalProvider>
      </OrderProvider>
    </>
  );
};
