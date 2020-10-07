import React, { useEffect } from "react";
import { Search } from "./search";
import { ContentArea, Card, ContentLoader } from "../views";
import { useStore } from "../customHooks/useStore";
import { RecipeView } from "./RecipeView";
import { noResult } from "../asssets/img";
import { Route } from "react-router-dom";

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
