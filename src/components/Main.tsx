import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ContentArea, Card, ContentLoader } from "@/views";
import { useStore } from "@/customHooks/useStore";
import { noResult } from "@/asssets/img";
import { RecipeView } from "./RecipeView";
import { Search } from "./search";

export const Main: React.FC = () => {
  const { loading, recipeList, getRandomRecipes, getRecipeById } = useStore();

  useEffect(() => {
    getRandomRecipes();
  }, [getRandomRecipes]);

  const renderRecipes = () =>
    recipeList?.map((recipe) => (
      <Card getRecipeById={getRecipeById} key={recipe.idMeal} recipe={recipe} />
    ));

  return (
    <>
      <Route path="/recipes/:id">
        <RecipeView />
      </Route>
      <ContentArea>
        <ContentLoader loading={loading}>
          {recipeList ? (
            renderRecipes()
          ) : (
            <img
              src={noResult}
              className="no-result-img"
              alt="no result found, check your spelling or try another name"
            />
          )}
        </ContentLoader>
      </ContentArea>
      <Search />
    </>
  );
};
