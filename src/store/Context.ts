import React, { Dispatch, SetStateAction } from "react";

export const Context = React.createContext<DefaultContext>({
  loading: false,
  recipeList: null,
  searchByName: () => {},
  setRecipeList: () => {},
  reviewLoading: false,
  reviewBarOpen: false,
  getRecipeById: () => {},
  reviewedRecipe: null,
  getRandomRecipes: () => {},
  resetReviewState: () => {},
  searchByCountry: () => {},
  searchByCategory: () => {},
  searchByIngredients: () => {},
});
