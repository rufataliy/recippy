import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

export const ByIngredient = () => {
  const [ingredients, setIngredients] = useState<string[] | undefined>([]);
  const [value, setValue] = useState("");

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

  return (
    <div className="ingredient-section">
      <div className="form-control">
        <input
          placeholder="Enter ingredient . . ."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="outlined" onClick={addIngredient} size="small">
          Add
        </Button>
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
        <Button size="large" className="bg-btn" fullWidth type="submit">
          search
        </Button>
      </div>
    </div>
  );
};
