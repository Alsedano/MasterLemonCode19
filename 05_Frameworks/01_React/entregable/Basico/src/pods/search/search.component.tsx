import { Button, IconButton } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface Props {
  orgSearch: string;
  setOrgSearch: React.Dispatch<React.SetStateAction<string>>;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<Props> = ({
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
      <IconButton>
        <SearchOutlinedIcon
          onClick={() => {
            setOrganization(orgSearch);
          }}
        />
      </IconButton>
    </>
  );
};
