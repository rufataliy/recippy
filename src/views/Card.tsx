import React from "react";
import Link from "next/link";
import MUICard from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { ChevronRightIcon, FlagIcon } from "@/views/icons";
import "@/asssets/styles/card.css";
import { categories } from "@/asssets/img";
import Chip from "@material-ui/core/Chip";

interface Props {
  getRecipeById: (id: string) => void;
  recipe: Recipe;
}

const mapIngredients = (recipe: Recipe) => {
  const ingredients = [];
  for (let i = 1; true; i++) {
    const ingrd = `strIngredient${i}`;
    if (!recipe[ingrd]) {
      break;
    }
    ingredients.push(recipe[ingrd]);
  }
  if (ingredients[0]) {
    return ingredients;
  } else {
    return undefined;
  }
};

export const Card: React.FC<Props> = React.memo(({ recipe }) => {
  const { strMeal, strMealThumb, idMeal } = recipe;

  return (
    <MUICard className="card">
      <CardMedia className="card-img" image={strMealThumb} title={strMeal} />
      <CardHeader
        classes={{ content: "card-content" }}
        title={
          <Tooltip title={strMeal}>
            <Typography variant="h6">{strMeal}</Typography>
          </Tooltip>
        }
      />
      <div className="card-details">
        {recipe.strCategory && (
          <Chip
            className="chip"
            variant="outlined"
            label={recipe.strCategory}
            icon={
              <img
                className="custom-icon"
                src={
                  categories[recipe.strCategory]
                    ? categories[recipe.strCategory].img
                    : ""
                }
                alt={recipe.strCategory}
              />
            }
          />
        )}
        {recipe.strArea && (
          <Chip
            className="chip"
            icon={<FlagIcon />}
            label={recipe.strArea}
            variant="outlined"
          />
        )}
      </div>
      <CardContent>
        <Typography className="card-short-info" color="textSecondary" paragraph>
          {recipe.strInstructions &&
            recipe.strInstructions.substring(0, 100) + "..."}
        </Typography>
        <div className="card-ingredients">
          {mapIngredients(recipe)?.map((ingredient) => {
            return (
              <Chip className="chip" variant="outlined" label={ingredient} />
            );
          })}
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Tooltip title="See the recipe">
          <Link shallow href={`/?recipeid=${idMeal}`}>
            <a>
              <Button endIcon={<ChevronRightIcon />} aria-label="see more">
                View
              </Button>
            </a>
          </Link>
        </Tooltip>
      </CardActions>
    </MUICard>
  );
});
