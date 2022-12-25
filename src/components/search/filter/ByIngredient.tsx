import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { useStore } from "@/customHooks";
import { Typography } from "@material-ui/core";
import {
  ADD_BTN,
  INGREDIENT_,
  SEARCH_BTN,
  SEARCH_INPUT,
} from "@/common/testIds";

export const ByIngredient = () => {
  const defaultErrorState = { cannotSearch: false, cannotAdd: false };
  const cannotAdd = { cannotSearch: false, cannotAdd: true };
  const cannotSearch = { cannotSearch: true, cannotAdd: false };
  const [ingredients, setIngredients] = useState<string[] | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(defaultErrorState);
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
    setError(defaultErrorState);
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
      setError(defaultErrorState);
      setValue("");
    } else {
      setError(cannotAdd);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (Boolean(value)) {
        return addIngredient();
      } else if (!Boolean(value) && ingredients) {
        return search();
      } else {
        return setError(cannotSearch);
      }
    }
  };
  // TODO: process multiple white spaces to be replaces with one underscore

  const search = () => {
    if (!ingredients) return setError(cannotSearch);
    const processedIngredients = ingredients
      ?.map((ingredient) => ingredient.replace(" ", "_"))
      .join(",");
    searchByIngredients(processedIngredients);
  };

  const clearFilter = () => {
    setValue("");
    setIngredients(null);
    setError(defaultErrorState);
    if (ingredients) {
      getRandomRecipes();
    }
  };

  return (
    <div className="ingredient-section">
      <div className="form-control">
        <input
          data-testid={SEARCH_INPUT}
          placeholder="Add an ingredient . . ."
          value={value}
          data-error={error.cannotSearch}
          onChange={onChange}
          onKeyPress={handleKeyDown}
        />
        <Typography
          paragraph
          className="input-error"
          data-error={error.cannotAdd || error.cannotSearch}
        >
          {error.cannotAdd && "Please enter an ingredient to add"}
          {error.cannotSearch && "Please add at least one ingredient"}
        </Typography>
      </div>
      <div className="ingredient-chips">
        {ingredients &&
          ingredients.map((ingredient, index) => {
            return (
              <Chip
                key={index}
                data-testid={INGREDIENT_ + ingredient}
                label={ingredient}
                onDelete={() => removeField(ingredient)}
                variant="outlined"
              />
            );
          })}
      </div>
      <div className="btn-group">
        <Button
          size="large"
          className="bg-btn bigger-btn"
          type="submit"
          onClick={search}
          data-testid={SEARCH_BTN}
        >
          search
        </Button>
        <Button
          className="smaller-btn"
          variant="outlined"
          size="small"
          onClick={addIngredient}
          data-testid={ADD_BTN}
        >
          Add
        </Button>
        <Button
          className="smaller-btn"
          variant="outlined"
          onClick={clearFilter}
          size="small"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
