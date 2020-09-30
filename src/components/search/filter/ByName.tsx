import React, { useMemo, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
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
    <div className="name-section">
      <div className="form-control">
        <input
          placeholder="Enter meal name . . ."
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="btn-group">
        <Button size="large" className="bg-btn" fullWidth type="submit">
          search
        </Button>
      </div>
    </div>
  );
};
