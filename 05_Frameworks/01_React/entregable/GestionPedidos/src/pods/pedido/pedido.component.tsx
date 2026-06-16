import React from "react";
import { CabeceraContainer } from "../cabecera";
import { DetallePedidoContainer } from "../detallePedido";
import { HeaderDetallePedidoContainer } from "../detallePedido/components/headerDetallePedido";

export const Pedido: React.FC = () => {
  return (
    <>
      <CabeceraContainer />
      <div className="marginPanel">
        <HeaderDetallePedidoContainer />
        <DetallePedidoContainer />
      </div>
    </>
  );
};
