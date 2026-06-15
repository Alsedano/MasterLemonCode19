import { MARGIN_SCENE } from "@/core/constants";
import { Margin } from "@mui/icons-material";
import { PropsWithChildren } from "react";

export const DetallePedidoLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <div className="marginPanel">{children}</div>;
};
