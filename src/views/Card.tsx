import React from "react";
import MUICard from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import { ChevronRightIcon, SaveIcon } from "./icons";
import "../asssets/styles/card.css";

interface Props {
  getRecipeById: (id: string) => void;
  saveRecipe: (id: string) => void;
  recipe: Recipe;
}

export const Card: React.FC<Props> = React.memo(
  ({ recipe, getRecipeById, saveRecipe }) => {
    const { strMeal, strMealThumb, idMeal } = recipe;

    return (
      <MUICard className="card">
        <CardMedia className="card-img" image={strMealThumb} title={strMeal} />
        <CardHeader
          classes={{ content: "card-content" }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Tooltip title={strMeal}>
              <p>{strMeal}</p>
            </Tooltip>
          }
          // subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.strInstructions &&
              recipe.strInstructions.substring(0, 100) + ". . ."}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "space-between" }}>
          <Tooltip title="Save">
            <IconButton onClick={() => saveRecipe(idMeal)} aria-label="save">
              <SaveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="See the recipe">
            <IconButton
              onClick={() => getRecipeById(idMeal)}
              aria-label="see more"
            >
              <ChevronRightIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </MUICard>
    );
  }
);
