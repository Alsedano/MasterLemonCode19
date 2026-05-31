import React from "react";
import { OrgContext } from "./search.provider";
import { Search } from "./search.component";

export const SearchContainer: React.FC = () => {
  const { organization, setOrganization } = React.useContext(OrgContext);
  const [orgSearch, setOrgSearch] = React.useState(organization);

  return (
    <Search
      orgSearch={orgSearch}
      setOrgSearch={setOrgSearch}
      setOrganization={setOrganization}
    />
  );
};
