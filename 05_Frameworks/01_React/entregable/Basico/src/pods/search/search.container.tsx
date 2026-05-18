import React from "react";
import { OrgContext } from "./search.provider";
import { SearchOrganization } from "./searchOrganization.component";

export const SearchContainer: React.FC = () => {
  const { organization, setOrganization } = React.useContext(OrgContext);
  const [orgSearch, setOrgSearch] = React.useState(organization);

  return (
    <SearchOrganization
      orgSearch={orgSearch}
      setOrgSearch={setOrgSearch}
      setOrganization={setOrganization}
    />
  );
};
