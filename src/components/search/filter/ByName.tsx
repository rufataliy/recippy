import React, { useMemo, useEffect, useState } from "react";
import { SearchIcon, FilterIcon } from "../../../views/icons";
import { debounce } from "../../../utils";
import { useStore } from "../../../customHooks";

export const ByName: React.FC = () => {
  const { search, getRandomRecipes } = useStore();
  const [value, setValue] = useState("");
  const callApi = useMemo(() => debounce(search, 800), [search]);

  useEffect(() => {
    if (Boolean(value.trim())) {
      return callApi(value);
    }
    getRandomRecipes();
  }, [value, callApi, getRandomRecipes]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
