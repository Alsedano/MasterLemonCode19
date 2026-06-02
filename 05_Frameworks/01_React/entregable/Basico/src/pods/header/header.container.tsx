import React from "react";
import { Header } from "./header.component";

interface Props {
  title: string;
  navButtons: React.ReactNode;
  search: React.ReactNode;
}

export const HeaderContainer: React.FC<Props> = ({
  title,
  navButtons,
  search,
}) => {
  return <Header title={title} navButtons={navButtons} search={search} />;
};
