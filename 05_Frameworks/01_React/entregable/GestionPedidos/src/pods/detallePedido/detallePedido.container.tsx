import React from "react";
import { DetallePedido } from "./detallePedido.component";
import { ImporteTotalContext, OrderContext } from "@/core";
import { OrderLine } from "@/mock/mockData";

export const DetallePedidoContainer: React.FC = () => {
  const { importeTotal, setImporteTotal } = React.useContext(ImporteTotalContext);
  const [selectedOrderLineIds, setSelectedOrderLineIds] = React.useState<number[]>([]);

  const { order } = React.useContext(OrderContext);

  React.useEffect(() => {
    const total = calculateTotal(order.orderLines);
    setImporteTotal(total);
  }, []);

  console.log(`DetallePedidoContainer`);

  const calculateTotal = (array: OrderLine[]): number => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue.importe, 0);
  };

  const processRowUpdate = (newRow: OrderLine, prevRow: OrderLine) => {
    const newImporteTotal =
      importeTotal - prevRow.importe + Number.parseInt(newRow.importe.toString());
    // Sorprendentemente, el valor que me da Material-UI para este campo no es number como si lo hace con el prevRow, sino que me devuelve el numero como un string

    setImporteTotal(newImporteTotal);
    console.log(`total: ${newImporteTotal}`);

    return newRow;
  };

  return (
    <DetallePedido
      orders={order.orderLines}
      processRowUpdate={processRowUpdate}
      setSelectedOrderLineIds={setSelectedOrderLineIds}
    />
  );
};
