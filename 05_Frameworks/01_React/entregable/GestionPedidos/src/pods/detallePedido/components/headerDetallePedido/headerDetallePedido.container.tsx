import React from "react";
import { HeaderDetallePedido } from "./headerDetallePedido.component";
import { EstadoContext, OrderContext } from "@/core";
import { OrderLine, StatusOrder } from "@/mock/mockData";

interface Props {
  selectedOrderLineIds: number[];
}

export const HeaderDetallePedidoContainer: React.FC<Props> = ({ selectedOrderLineIds }) => {
  const { order, setOrder } = React.useContext(OrderContext);
  const { setEstado } = React.useContext(EstadoContext);

  const checkState = (updatedOrderLines: OrderLine[]) => {
    const validatedOrders = updatedOrderLines.filter(
      (line) => line.estado === StatusOrder.Validado,
    );
    const calc = (validatedOrders.length / updatedOrderLines.length) * 100;
    setEstado(calc);
  };

  const validateOrderLines = () => {
    const updatedOrderLines = order.orderLines.map((line) =>
      selectedOrderLineIds.indexOf(line.id) !== -1
        ? { ...line, estado: StatusOrder.Validado }
        : line,
    );

    setOrder({ ...order, orderLines: updatedOrderLines });

    checkState(updatedOrderLines);
  };

  const inValidateOrderLines = () => {
    const updatedOrderLines = order.orderLines.map((line) =>
      selectedOrderLineIds.indexOf(line.id) !== -1
        ? { ...line, estado: StatusOrder.Pendiente }
        : line,
    );

    setOrder({ ...order, orderLines: updatedOrderLines });

    checkState(updatedOrderLines);
  };

  return (
    <HeaderDetallePedido
      validateOrderLines={validateOrderLines}
      inValidateOrderLines={inValidateOrderLines}
    />
  );
};
