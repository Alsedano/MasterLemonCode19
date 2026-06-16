import { AppLayout } from "@/layouts";
import { Typography } from "@mui/material";
import React from "react";
import { PedidoContainer } from "@/pods/pedido";

export const AppScene: React.FC = () => {
  return (
    <AppLayout>
      <Typography variant="h4" className="marginPanel">
        Pedido a proveedor
      </Typography>
      <PedidoContainer />
    </AppLayout>
  );
};
