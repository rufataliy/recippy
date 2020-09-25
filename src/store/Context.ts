import React, { Dispatch, SetStateAction } from "react";

type VoidFunction = () => void;

interface DefaultContext {
  search: (args?: any) => void;
  loading: boolean;
  recipeList: RecipeShort[] | null;
  setRecipeList: Dispatch<SetStateAction<RecipeShort[] | null>> | VoidFunction;
  selectedRecipeId: string | null;
  getRandomRecipes: (arg?: any) => void;
  setSelectedRecipeId: Dispatch<SetStateAction<string | null>> | VoidFunction;
}

export const Context = React.createContext<DefaultContext>({
  search: () => {},
  loading: false,
  recipeList: null,
  setRecipeList: () => {},
  selectedRecipeId: null,
  getRandomRecipes: () => {},
  setSelectedRecipeId: () => {},
});
