import { useState } from "react";

export const useGlobalState = () => {
  const [recipeList, setRecipeList] = useState<RecipeShort[] | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);

  return {
    recipeList,
    setRecipeList,
    selectedRecipeId,
    setSelectedRecipeId,
  };
};
