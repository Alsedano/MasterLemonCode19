import React from "react";
import { HeaderDetallePedidoContainer } from "@/pods/detallePedido/components/headerDetallePedido";
import { DetallePedidoLayout } from "@/layouts/detallePedido.layout";
import { DetallePedidoContainer } from "@/pods/detallePedido";

export const DetallePedidoScene: React.FC = () => {
  return (
    <DetallePedidoLayout>
      <HeaderDetallePedidoContainer />
      <DetallePedidoContainer />
    </DetallePedidoLayout>
  );
};
