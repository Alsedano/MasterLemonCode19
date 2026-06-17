import React, { memo } from "react";
import { Cabecera } from "./cabecera.component";
import { EstadoContext, ImporteTotalContext, OrderContext } from "@/core";

export const CabeceraContainer: React.FC = memo(() => {
  const { order } = React.useContext(OrderContext);
  const { importeTotal } = React.useContext(ImporteTotalContext);
  const { estado } = React.useContext(EstadoContext);

  return (
    <Cabecera
      orderNumber={order.orderNumber}
      supplier={order.supplier}
      date={order.date}
      totalOrder={importeTotal}
      status={estado}
    />
  );
});
