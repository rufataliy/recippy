import { useState, useMemo, useCallback } from "react";
import { makeApiRequest } from "../utils";

export const useGlobalState = () => {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null);
  const [reviewBarOpen, setReviewBarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewedRecipe, setReviewedRecipe] = useState(null);

  const searchByName = useMemo(
    () => (keyword: string) => {
      makeApiRequest(
        `/api/search-by?keyword=${keyword}`,
        (data) => setRecipeList(data.meals),
        setLoading
      );
    },
    [setLoading]
  );

  const searchByIngredients = useMemo(
    () => (ingredients: string) => {
      makeApiRequest(
        `/api/filter-by?filterType=i&filterValue=${ingredients}`,
        (data) => setRecipeList(data.meals),
        setLoading
      );
    },
    [setLoading]
  );

  const searchByCountry = useMemo(
    () => (country: string) => {
      makeApiRequest(
        `/api/filter-by?filterType=a&filterValue=${country}`,
        (data) => setRecipeList(data.meals),
        setLoading
      );
    },
    [setLoading]
  );

  const searchByCategory = useMemo(
    () => (category: string) => {
      makeApiRequest(
        `/api/filter-by?filterType=c&filterValue=${category}`,
        (data) => setRecipeList(data.meals),
        setLoading
      );
    },
    [setLoading]
  );

  const getRandomRecipes = useMemo(
    () => () => {
      makeApiRequest(
        `/api/randomRecipes`,
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
        `/api/by-id?id=${id}`,
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
    searchByCountry,
    searchByCategory,
    resetReviewState,
    getRandomRecipes,
    searchByIngredients,
  };
};
