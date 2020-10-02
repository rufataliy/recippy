import React, { Dispatch, SetStateAction } from "react";

type VoidFunction = () => void;

interface DefaultContext {
  loading: boolean;
  recipeList: RecipeShort[] | null;
  searchByName: (args?: any) => void;
  setRecipeList: Dispatch<SetStateAction<RecipeShort[] | null>> | VoidFunction;
  reviewLoading: boolean;
  reviewBarOpen: boolean;
  getRecipeById: (id: string) => void;
  reviewedRecipe: Recipe | null;
  resetReviewState: () => void;
  getRandomRecipes: (arg?: any) => void;
}

export const Context = React.createContext<DefaultContext>({
  search: () => {},
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
});
