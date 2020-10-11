import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useStore } from "@/customHooks";

export const ByName: React.FC = () => {
  const { searchByName, getRandomRecipes } = useStore();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!Boolean(value.trim())) {
      getRandomRecipes();
    }
  }, [value, getRandomRecipes]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchHandler = () => {
    if (Boolean(value)) {
      return searchByName(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="name-section">
      <div className="form-control">
        <input
          placeholder="Enter meal name . . ."
          onKeyPress={handleKeyDown}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="btn-group">
        <Button
          onClick={() => searchHandler()}
          size="large"
          className="bg-btn"
          fullWidth
          type="submit"
        >
          search
        </Button>
        <Button onClick={() => setValue("")}>Clear</Button>
      </div>
    </div>
  );
};
