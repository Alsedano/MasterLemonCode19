import React, { PropsWithChildren } from "react";

/* interface Props {
  header: React.ReactNode;
} */

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="">{children}</div>;
};
