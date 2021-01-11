interface CategoriesResponse {
  meals: Category[];
}

export const categories: CategoriesResponse = {
  meals: [{ strCategory: "Vegererian" }, { strCategory: "Dessert" }],
};

interface CountriesResponse {
  meals: Area[];
}

export const countries: CountriesResponse = {
  meals: [{ strArea: "French" }, { strArea: "Canadian" }],
};
