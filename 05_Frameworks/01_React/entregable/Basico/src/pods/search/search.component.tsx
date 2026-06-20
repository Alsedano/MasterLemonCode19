import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  textSearch: string;
  setTextSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<Props> = ({ textSearch, setTextSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function keyPress(e) {
    if (e.keyCode == 13) {
      //Enter key
      setTextSearch(inputRef.current?.value || "");
    }
  }

  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "80%" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputRef={inputRef}
          defaultValue={textSearch}
          onKeyDown={keyPress}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            setTextSearch(inputRef.current?.value || "");
          }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};
