import React, { useEffect } from "react";
import { Layout } from "./components";
import { Search } from "./components";
import { ContentArea, Card } from "./views";
import { useStore } from "./customHooks/useStore";
import { RecipeView } from "./components/RecipeView";

function App() {
  const {
    recipeList,
    setRecipeList,
    setSelectedRecipeId,
    selectedRecipeId,
  } = useStore();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken")
      .then((res) => {
        return res.json();
      })
      .then((data) => setRecipeList(data.meals));
  }, [setRecipeList]);

  const saveRecipe = (id: string) => {
    const ids = window.localStorage.getItem("recipes");
    window.localStorage.setItem("recipes", ids ? ids + `,${id}` : id);
  };

  return (
    <Layout>
      <RecipeView open={Boolean(selectedRecipeId)} />
      <Search />
      <ContentArea>
        {recipeList &&
          recipeList.map((recipe) => (
            <Card
              saveRecipe={saveRecipe}
              key={recipe.idMeal}
              setSelectedRecipeId={(id: string) => setSelectedRecipeId(id)}
              recipe={recipe}
            />
          ))}
      </ContentArea>
    </Layout>
  );
}

export default App;
