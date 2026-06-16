import React, { memo } from "react";
import { Cabecera } from "./cabecera.component";
import { ImporteTotalContext, OrderContext } from "@/core";

export const CabeceraContainer: React.FC = memo(() => {
  const { order } = React.useContext(OrderContext);
  const { importeTotal } = React.useContext(ImporteTotalContext);

  console.log("Se pinta CabeceraContainer");

  return (
    <Cabecera
      orderNumber={order.orderNumber}
      supplier={order.supplier}
      date={order.date}
      totalOrder={importeTotal}
      status={order.status}
    />
  );
});
