import React, { PropsWithChildren } from "react";

interface SearchContextModel {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<SearchContextModel>({
  searchText: "",
  setSearchText: () => {},
});

export const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchText, setSearchText] = React.useState("lemoncode");

  return (
    <SearchContext
      value={{ searchText: searchText, setSearchText: setSearchText }}
    >
      {children}
    </SearchContext>
  );
};
