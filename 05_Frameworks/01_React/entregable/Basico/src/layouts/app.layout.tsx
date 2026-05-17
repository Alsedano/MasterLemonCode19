import React, { PropsWithChildren } from "react";

interface Props {
  header: React.ReactNode;
}

export const AppLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  header,
}) => {
  return (
    <div className="">
      <div className="">{header}</div>
      {children}
    </div>
  );
};
