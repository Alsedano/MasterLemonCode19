import React from "react";

interface Props {
  orgSearch: string;
  setOrgSearch: React.Dispatch<React.SetStateAction<string>>;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchOrganization: React.FC<Props> = ({
  orgSearch,
  setOrgSearch,
  setOrganization,
}) => {
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
