import React, { useState, useEffect } from "react";
import { Header, SideNav, RecipeView } from "../views";
import { Search } from "./search";
import { ContentArea, Card } from "../views";
import { useStore } from "../customHooks/useStore";

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <SideNav toggleNav={toggleSidebar} open={sidebarOpen} />
      <RecipeView open={Boolean(selectedRecipeId)} />
      <Search />
      <ContentArea>
        {recipeList &&
          recipeList.map((recipe) => (
            <Card
              key={recipe.idMeal}
              setSelectedRecipeId={(id: string) => setSelectedRecipeId(id)}
              recipe={recipe}
            />
          ))}
      </ContentArea>
    </>
  );
};
