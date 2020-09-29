import React, { useEffect } from "react";
import { Search } from "./search";
import { ContentArea, Card, ContentLoader } from "../views";
import { useStore } from "../customHooks/useStore";
import { RecipeView } from "./RecipeView";
import { noResult } from "../asssets/img";

const saveRecipe = (id: string) => {
  const ids = window.localStorage.getItem("recipes");
  window.localStorage.setItem("recipes", ids ? ids + `,${id}` : id);
};

export const Main: React.FC = () => {
  const {
    loading,
    recipeList,
    getRandomRecipes,
    getRecipeById,
    reviewBarOpen,
  } = useStore();

  useEffect(() => {
    getRandomRecipes();
  }, [getRandomRecipes]);

  const renderRecipes = () =>
    recipeList?.map((recipe) => (
      <Card
        getRecipeById={getRecipeById}
        saveRecipe={saveRecipe}
        key={recipe.idMeal}
        recipe={recipe}
      />
    ));

  return (
    <>
      <RecipeView open={Boolean(reviewBarOpen)} />
      <ContentArea>
        <ContentLoader loading={loading}>
          {recipeList ? (
            renderRecipes()
          ) : (
            <img
              src={noResult}
              alt="no result found, check your spelling or try another name"
            />
          )}
        </ContentLoader>
      </ContentArea>
      <Search />
    </>
  );
};
