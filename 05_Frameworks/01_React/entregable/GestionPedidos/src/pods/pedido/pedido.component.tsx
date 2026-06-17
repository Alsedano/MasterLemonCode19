import React from "react";
import { CabeceraContainer } from "../cabecera";
import { DetallePedidoContainer } from "../detallePedido";
import { HeaderDetallePedidoContainer } from "../detallePedido/components/headerDetallePedido";

interface Props {
  selectedOrderLineIds: number[];
  setSelectedOrderLineIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Pedido: React.FC<Props> = ({ selectedOrderLineIds, setSelectedOrderLineIds }) => {
  return (
    <>
      <CabeceraContainer />
      <div className="marginPanel">
        <HeaderDetallePedidoContainer selectedOrderLineIds={selectedOrderLineIds} />
        <DetallePedidoContainer setSelectedOrderLineIds={setSelectedOrderLineIds} />
      </div>
    </>
  );
};
