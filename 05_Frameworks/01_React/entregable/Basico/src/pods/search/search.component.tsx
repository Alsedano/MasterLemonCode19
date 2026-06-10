import { IconButton } from "@mui/material";
import React, { useRef } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface Props {
  textSearch: string;
  setTextSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<Props> = ({ textSearch, setTextSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={inputRef} type="text" defaultValue={textSearch} />
      <IconButton>
        <SearchOutlinedIcon
          onClick={() => {
            setTextSearch(inputRef.current?.value || "");
          }}
        />
      </IconButton>
    </>
  );
};
