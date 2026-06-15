import { Footer } from "@/pods/footer/footer.component";
import { Header } from "@/pods/header/header.component";
import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="gridDiv">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
