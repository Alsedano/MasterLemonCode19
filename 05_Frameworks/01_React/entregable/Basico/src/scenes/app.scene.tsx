import React, { PropsWithChildren } from "react";
import { AppLayout } from "@/layouts";

export const AppScene: React.FC<PropsWithChildren> = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};
