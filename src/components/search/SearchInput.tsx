import React, { useMemo } from "react";
import { SearchIcon, FilterIcon } from "../../views/icons";
import { debounce } from "../../utils";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput: React.FC<Props> = ({ value, setValue }) => {
  const callApi = useMemo(
    () =>
      debounce(function () {
        console.log("search");
      }, 500),
    [debounce]
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    callApi();
  };
  return (
    <>
      <input placeholder="Search" value={value} onChange={(e) => onChange(e)} />
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
