import React, { useState, useEffect } from "react";
import { Header, Sidebar } from "../views";
import { Search } from "./search";
import { ContentArea, Card } from "../views";

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setRecipes(data.meals));
  });
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} open={sidebarOpen} />
      <Search />
      <ContentArea>
        {recipes.length > 0 &&
          recipes.map((recipe) => <Card recipe={recipe} />)}
      </ContentArea>
    </>
  );
};
