import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ContentArea, Card, ContentLoader } from "@/views";
import { useStore } from "@/customHooks";
import { noResult } from "@/asssets/img";
import { RecipeView } from "@/components";
import { Search } from "@/components/search";

const Index: React.FC = () => {
  const { loading, recipeList, getRandomRecipes, getRecipeById } = useStore();
  const { query } = useRouter();

  useEffect(() => {
    getRandomRecipes();
  }, [getRandomRecipes]);

  const renderRecipes = () =>
    recipeList?.map((recipe) => (
      <Card getRecipeById={getRecipeById} key={recipe.idMeal} recipe={recipe} />
    ));

  return (
    <>
      {query.recipeid && <RecipeView />}
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

export default Index;
