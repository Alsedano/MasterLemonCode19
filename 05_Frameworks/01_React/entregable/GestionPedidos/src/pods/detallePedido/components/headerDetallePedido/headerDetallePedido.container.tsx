import React from "react";
import { HeaderDetallePedido } from "./headerDetallePedido.component";

export const HeaderDetallePedidoContainer: React.FC = () => {
  const validateOrderLines = () => {};

  const inValidateOrderLines = () => {};

  return (
    <HeaderDetallePedido
      validateOrderLines={validateOrderLines}
      inValidateOrderLines={inValidateOrderLines}
    />
  );
};
