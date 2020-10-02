import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { useStore } from "../../../customHooks";

export const ByIngredient = () => {
  const [ingredients, setIngredients] = useState<string[] | undefined>([]);
  const [value, setValue] = useState("");
  const { searchByIngredients, getRandomRecipes } = useStore();

  const removeField = (ingredientToRemove: string) => {
    setIngredients((ingredients) => {
      if (ingredients) {
        return ingredients.filter(
          (ingredient) => ingredient !== ingredientToRemove
        );
      }
    });
  };

  const addIngredient = () => {
    setIngredients((ingredients) => {
      return ingredients && [...ingredients, value];
    });
    setValue("");
  };

  // TODO: process multiple white spaces to be replaces with one underscore

  const search = () => {
    const processedIngredients = ingredients
      ?.map((ingredient) => ingredient.replace(" ", "_"))
      .join(",");
    console.log(processedIngredients);

    searchByIngredients(processedIngredients);
  };

  const clearIngredients = () => {
    setIngredients([]);
    getRandomRecipes();
  };

  return (
    <div className="ingredient-section">
      <div className="form-control">
        <input
          placeholder="Enter ingredient . . ."
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
        <Button variant="outlined" onClick={clearIngredients} size="small">
          Clear
        </Button>
        <Button variant="outlined" onClick={addIngredient} size="small">
          Add
        </Button>
      </div>
    </div>
  );
};
