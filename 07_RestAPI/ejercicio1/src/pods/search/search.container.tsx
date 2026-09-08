import React from "react";
import { SearchContext } from "./search.provider";
import { Search } from "./search.component";

export const SearchContainer: React.FC = () => {
  const { searchText, setSearchText } = React.useContext(SearchContext);

  return <Search textSearch={searchText} setTextSearch={setSearchText} />;
};
