import { useState, useMemo, useCallback } from "react";
import { makeApiRequest } from "../utils";

export const useGlobalState = () => {
  const [recipeList, setRecipeList] = useState<RecipeShort[] | null>(null);
  const [reviewBarOpen, setReviewBarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewedRecipe, setReviewedRecipe] = useState(null);

  const searchByName = useMemo(
    () => (keyword: string) => {
      makeApiRequest(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
        (data) => setRecipeList(data.meals),
        setLoading
      );
    },
    [setLoading]
  );

  const searchByIngredients = useMemo(
    () => (ingredients: string) => {
      makeApiRequest(
        `https://www.themealdb.com/api/json/v1/1/list.php?i=${ingredients}`,
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

  const openReviewBar = useMemo(() => () => setReviewBarOpen(true), [
    setReviewBarOpen,
  ]);

  const closeReviewBar = useMemo(() => () => setReviewBarOpen(false), [
    setReviewBarOpen,
  ]);

  const resetReviewState = useCallback(() => {
    setReviewedRecipe(null);
    closeReviewBar();
  }, [closeReviewBar]);

  const getRecipeById = useMemo(
    () => (id: string) => {
      openReviewBar();
      makeApiRequest(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        (data) => setReviewedRecipe(data.meals[0]),
        setReviewLoading
      );
    },
    [openReviewBar]
  );

  return {
    loading,
    recipeList,
    searchByName,
    setRecipeList,
    reviewLoading,
    reviewBarOpen,
    getRecipeById,
    reviewedRecipe,
    resetReviewState,
    getRandomRecipes,
    searchByIngredients,
  };
};
