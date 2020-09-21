import React from "react";
import { SearchIcon, FilterIcon } from "../../views/icons";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput: React.FC<Props> = ({ value, setValue }) => {
  return (
    <>
      <input
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="search-controls">
        <button className="search-icon-btn">
          <SearchIcon />
        </button>
        <button className="search-icon-btn">
          <FilterIcon />
        </button>
      </div>
    </>
  );
};
