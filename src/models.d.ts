interface Recipe {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: null;
  strCategory:
    | "Vegan"
    | "Beef"
    | "Breakfast"
    | "Chicken"
    | "Dessert"
    | "Goat"
    | "Lamb"
    | "Pasta"
    | "Pork"
    | "Seafood"
    | "Side"
    | "Starter"
    | "Vegetarian";
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strSource: string;
  [key: string]: string;
}

interface RecipeShort {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
