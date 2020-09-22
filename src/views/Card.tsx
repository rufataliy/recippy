import React from "react";
import MUICard from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ChevronRightIcon } from "./icons";
import "../asssets/styles/card.css";

interface Props {
  setSelectedRecipe?: (id: string) => void;
  recipe: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  };
}

export const Card: React.FC<Props> = ({ recipe, setSelectedRecipe }) => {
  const { strMeal, strMealThumb, idMeal } = recipe;

  return (
    <MUICard className="card">
      <CardMedia className="card-img" image={strMealThumb} title={strMeal} />
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={strMeal}
        // subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={() => setSelectedRecipe && setSelectedRecipe(recipe.idMeal)}
          aria-label="see more"
        >
          <ChevronRightIcon />
        </IconButton>
      </CardActions>
    </MUICard>
  );
};
