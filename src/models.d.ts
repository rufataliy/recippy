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

interface Area {
  strArea: string;
}

interface Category {
  strCategory: string;
}

type VoidFunction = () => void;

interface DefaultContext {
  loading: boolean;
  recipeList: Recipe[] | null;
  searchByName: (args?: any) => void;
  setRecipeList: Dispatch<SetStateAction<Recipe[] | null>> | VoidFunction;
  reviewLoading: boolean;
  reviewBarOpen: boolean;
  getRecipeById: (id: string) => void;
  reviewedRecipe: Recipe | null;
  searchByCountry: (arg?: any) => void;
  resetReviewState: () => void;
  getRandomRecipes: (arg?: any) => void;
  searchByIngredients: (args?: any) => void;
  searchByCategory: (args?: any) => void;
}
