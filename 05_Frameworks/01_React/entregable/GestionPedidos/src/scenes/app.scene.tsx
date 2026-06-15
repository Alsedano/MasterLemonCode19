import { AppLayout } from "@/layouts";
import { CabeceraContainer } from "@/pods/cabecera";
import { Typography } from "@mui/material";
import React from "react";
import { DetallePedidoScene } from "./detallePedido.scene";

export const AppScene: React.FC = () => {
  return (
    <AppLayout>
      <Typography variant="h4" className="marginPanel">
        Pedido a proveedor
      </Typography>
      <CabeceraContainer />
      <DetallePedidoScene />
    </AppLayout>
  );
};
