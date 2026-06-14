import { Header } from "@/pods/header/header.component";
import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="gridDiv">{children}</main>
    </div>
  );
};
