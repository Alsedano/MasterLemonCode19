import React, { PropsWithChildren } from "react";

interface Props {
  header: React.ReactNode;
}

export const AppLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  header,
}) => {
  return (
    <div>
      <div className="header">{header}</div>
      <main className="main">{children}</main>
    </div>
  );
};
