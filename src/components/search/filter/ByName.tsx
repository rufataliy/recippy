import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useStore } from "@/customHooks";
import { Typography } from "@material-ui/core";

export const ByName: React.FC = () => {
  const { searchByName, getRandomRecipes } = useStore();
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!Boolean(value.trim())) {
      getRandomRecipes();
    }
  }, [value, getRandomRecipes]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setValue(e.target.value);
  };

  const searchHandler = () => {
    if (Boolean(value)) {
      return searchByName(value);
    } else {
      setError(true);
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
          data-error={error}
          value={value}
          required
          onChange={onChange}
        />
        <Typography paragraph className="input-error" data-error={error}>
          {error && "Please enter a meal name"}
        </Typography>
      </div>
      <div className="btn-group">
        <Button
          onClick={() => searchHandler()}
          size="large"
          className="bg-btn bigger-btn"
          type="submit"
        >
          search
        </Button>
        <Button className="smaller-btn" onClick={() => setValue("")}>
          Clear
        </Button>
      </div>
    </div>
  );
};
