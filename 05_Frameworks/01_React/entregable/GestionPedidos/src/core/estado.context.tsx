import React, { PropsWithChildren } from "react";

export const EstadoContext = React.createContext<EstadoContextModel>({
  estado: 0,
  setEstado: () => {},
});

export const EstadoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [estado, setEstado] = React.useState(0);

  return <EstadoContext value={{ estado: estado, setEstado: setEstado }}>{children}</EstadoContext>;
};
