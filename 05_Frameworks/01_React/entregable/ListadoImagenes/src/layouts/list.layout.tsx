import React, { PropsWithChildren } from "react";

export const ListLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="flexList">{children}</div>
    </div>
  );
};
