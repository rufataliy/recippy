import React, { Dispatch, SetStateAction } from "react";

type VoidFunction = () => void;

interface DefaultContext {
  loading: boolean;
  recipeList: Recipe[] | null;
  searchByName: (args?: any) => void;
  setRecipeList: Dispatch<SetStateAction<Recipe[] | null>> | VoidFunction;
  reviewLoading: boolean;
  reviewBarOpen: boolean;
  getRecipeById: (id: string) => void;
  reviewedRecipe: Recipe | null;
  searchByCountry: (arg?: any) => void;
  resetReviewState: () => void;
  getRandomRecipes: (arg?: any) => void;
  searchByIngredients: (args?: any) => void;
}

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
  searchByIngredients: () => {},
});
