import React, { useState, useEffect } from "react";
import { Header, SideNav, RecipeView } from "../views";
import { Search } from "./search";
import { ContentArea, Card } from "../views";

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [recipes, setRecipes] = useState<RecipeShort[] | null>(null);

  const reviewOpen = selectedRecipe !== "";

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setRecipes(data.meals));
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <SideNav toggleNav={toggleSidebar} open={sidebarOpen} />
      <RecipeView
        idMeal={selectedRecipe}
        toggleView={() => setSelectedRecipe("")}
        open={reviewOpen}
      />
      <Search />
      <ContentArea>
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipe) => (
            <Card
              key={recipe.idMeal}
              setSelectedRecipe={(id: string) => setSelectedRecipe(id)}
              recipe={recipe}
            />
          ))}
      </ContentArea>
    </>
  );
};
