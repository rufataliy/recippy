import { useState, useMemo } from "react";
import { makeApiRequest } from "../utils";

export const useGlobalState = () => {
  const [recipeList, setRecipeList] = useState<RecipeShort[] | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const search = useMemo(
    () => (keyword?: string) => {
      makeApiRequest(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
        (data) => setRecipeList(data.meals),
        setLoading
      );
    },
    [setLoading]
  );

  const getRandomRecipes = useMemo(
    () => () => {
      makeApiRequest(
        `https://www.themealdb.com/api/json/v1/1/random.php`,
        (data) => setRecipeList(data.meals),
        setLoading
      );
    },
    [setLoading]
  );

  return {
    search,
    loading,
    recipeList,
    setRecipeList,
    selectedRecipeId,
    getRandomRecipes,
    setSelectedRecipeId,
  };
};
