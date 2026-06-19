import React, { PropsWithChildren } from "react";

export const ImporteTotalContext = React.createContext<ImporteTotalContextModel>({
  importeTotal: 0,
  setImporteTotal: () => {},
});

export const ImporteTotalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [importeTotal, setImporteTotal] = React.useState(0);

  return (
    <ImporteTotalContext value={{ importeTotal: importeTotal, setImporteTotal: setImporteTotal }}>
      {children}
    </ImporteTotalContext>
  );
};
