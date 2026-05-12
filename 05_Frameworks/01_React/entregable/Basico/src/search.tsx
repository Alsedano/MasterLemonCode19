import React from "react";
import { OrgContext } from "./search.provider";

export const Search: React.FC = () => {
  const { organization, setOrganization } = React.useContext(OrgContext);
  const [orgSearch, setOrgSearch] = React.useState(organization);

  return (
    <>
      <input
        type="text"
        value={orgSearch}
        onChange={(e) => {
          setOrgSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setOrganization(orgSearch);
        }}
      >
        Search
      </button>
    </>
  );
};
