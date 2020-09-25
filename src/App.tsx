import React, { useEffect } from "react";
import { Layout } from "./components";
import { Search } from "./components";
import { ContentArea, Card, ContentLoader } from "./views";
import { useStore } from "./customHooks/useStore";
import { RecipeView } from "./components/RecipeView";

const saveRecipe = (id: string) => {
  const ids = window.localStorage.getItem("recipes");
  window.localStorage.setItem("recipes", ids ? ids + `,${id}` : id);
};

function App() {
  const {
    loading,
    recipeList,
    getRandomRecipes,
    selectedRecipeId,
    setSelectedRecipeId,
  } = useStore();

  useEffect(() => {
    getRandomRecipes();
  }, [getRandomRecipes]);

  const renderRecipes = () =>
    recipeList?.map((recipe) => (
      <Card
        saveRecipe={saveRecipe}
        key={recipe.idMeal}
        setSelectedRecipeId={setSelectedRecipeId}
        recipe={recipe}
      />
    ));

  return (
    <Layout>
      <RecipeView open={Boolean(selectedRecipeId)} />
      <Search />
      <ContentArea>
        <ContentLoader loading={loading}>
          {recipeList && renderRecipes()}
        </ContentLoader>
      </ContentArea>
    </Layout>
  );
}

export default App;
