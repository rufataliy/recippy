import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import { useStore } from "../../../customHooks";

export const ByIngredient = () => {
  const [ingredients, setIngredients] = useState<string[] | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const { searchByIngredients, getRandomRecipes } = useStore();

  const removeField = (ingredientToRemove: string) => {
    setIngredients((ingredients) => {
      if (ingredients) {
        return ingredients.filter(
          (ingredient) => ingredient !== ingredientToRemove
        );
      } else {
        return null;
      }
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setValue(e.target.value);
  };

  const addIngredient = () => {
    if (Boolean(value.trim())) {
      if (ingredients?.includes(value)) {
        return setValue("");
      }
      setIngredients((ingredients) => {
        if (ingredients) {
          if (ingredients.includes(value)) {
            return ingredients;
          }
          return [...ingredients, value];
        } else {
          return [value];
        }
      });
      setError(false);
      setValue("");
    } else {
      setError(true);
    }
  };

  // TODO: process multiple white spaces to be replaces with one underscore

  const search = () => {
    const processedIngredients = ingredients
      ?.map((ingredient) => ingredient.replace(" ", "_"))
      .join(",");
    console.log(processedIngredients);

    searchByIngredients(processedIngredients);
  };

  const clearFilter = () => {
    setIngredients(null);
    setError(false);
    if (ingredients) {
      getRandomRecipes();
    }
  };

  return (
    <div className="ingredient-section">
      <div className="form-control">
        <input
          placeholder="Enter ingredient . . ."
          value={value}
          data-error={error}
          onChange={onChange}
        />
      </div>
      <div className="ingredient-chips">
        {ingredients &&
          ingredients.map((ingredient) => {
            return (
              <Chip
                label={ingredient}
                onDelete={() => removeField(ingredient)}
                variant="outlined"
              />
            );
          })}
      </div>
      <div className="btn-group">
        <Button
          onClick={search}
          size="large"
          className="bg-btn"
          fullWidth
          type="submit"
        >
          search
        </Button>
        <Button variant="outlined" onClick={clearFilter} size="small">
          Clear
        </Button>
        <Button variant="outlined" onClick={addIngredient} size="small">
          Add
        </Button>
      </div>
    </div>
  );
};
