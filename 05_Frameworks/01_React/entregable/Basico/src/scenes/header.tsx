import { SearchContainer } from "@/pods/search";
import { SearchOrganization } from "@/pods/search/searchOrganization.component";
import React from "react";

export const Header: React.FC = () => {
  return (
    <>
      <h2>Hello from List page</h2>
      <SearchContainer />
    </>
  );
};
