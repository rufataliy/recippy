import React, { Dispatch, SetStateAction } from "react";

type VoidFunction = () => void;
interface DefaultContext {
  recipeList: RecipeShort[] | null;
  selectedRecipeId: string | null;
  setSelectedRecipeId: Dispatch<SetStateAction<string | null>> | VoidFunction;
  setRecipeList: Dispatch<SetStateAction<RecipeShort[] | null>> | VoidFunction;
}

export const Context = React.createContext<DefaultContext>({
  recipeList: null,
  selectedRecipeId: null,
  setSelectedRecipeId: () => {},
  setRecipeList: () => {},
});
