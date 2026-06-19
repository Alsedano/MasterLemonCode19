import { FooterContainer } from "@/pods/footer";
import { HeaderContainer } from "@/pods/header";
import React, { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main className="main">{children}</main>
      <FooterContainer />
    </>
  );
};
