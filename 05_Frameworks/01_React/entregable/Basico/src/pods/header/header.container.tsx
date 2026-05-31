import React from "react";
import { Header } from "./header.component";

interface Props {
  title: string;
  search: React.ReactNode;
}

export const HeaderContainer: React.FC<Props> = ({ title, search }) => {
  return <Header title={title} search={search} />;
};
