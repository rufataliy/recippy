import React, { useMemo } from "react";
import { SearchIcon, FilterIcon } from "../../views/icons";
import { debounce } from "../../utils";
import { useStore } from "../../customHooks";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput: React.FC<Props> = ({ value, setValue }) => {
  const { search } = useStore();

  const callApi = useMemo(() => debounce(search, 500), [search]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    callApi(e.target.value);
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
