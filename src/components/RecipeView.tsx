import React, { useEffect } from "react";
import { Sidebar } from "@/views/Sidebar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import { VideoIcon, FlagIcon, LinkIcon, CloseIcon } from "@/views/icons";
import { ContentLoader } from "@/views";
import { categories } from "@/asssets/img/icons";
import { useStore } from "@/customHooks";
import { useRouter } from "next/router";
import IconButton from "@material-ui/core/IconButton";
import "@/asssets/styles/review.css";

interface Props {
  id?: string;
}

const mapIngredientToMeasure = (recipe: Recipe) => {
  const elements = [];
  for (let i = 1; true; i++) {
    const ingrd = `strIngredient${i}`;
    const msr = `strMeasure${i}`;
    if (!recipe[ingrd]) {
      break;
    }
    elements.push(
      <ListItem key={ingrd} className="list-item">
        <ListItemText primary={recipe[ingrd]} />
        <ListItemText className="text-right" primary={recipe[msr]} />
      </ListItem>
    );
  }
  return elements;
};

export const RecipeView: React.FC<Props> = () => {
  const {
    reviewedRecipe: recipe,
    resetReviewState,
    getRecipeById,
    reviewLoading,
  } = useStore();

  const {
    query: { recipeid },
    push,
  } = useRouter();

  useEffect(() => {
    if (recipeid) {
      getRecipeById(recipeid as string);
    }
    return () => resetReviewState();
  }, [resetReviewState]);

  const close = () => {
    push("/");
    resetReviewState();
  };

  return (
    <Sidebar position={"right"} open={Boolean(recipeid)} toggleSidebar={close}>
      <div className="review-area">
        <ContentLoader loading={reviewLoading}>
          {recipe != null ? (
            <>
              <div className="review-img">
                <IconButton className="hide-on-large close-btn" onClick={close}>
                  <CloseIcon />
                </IconButton>
                <img src={recipe.strMealThumb} alt="" />
              </div>
              <div className="review-wrapper">
                <Typography variant="h4">{recipe.strMeal}</Typography>
                <div className="review-info">
                  <Chip
                    className="chip"
                    label="Video"
                    component="a"
                    target="_blank"
                    variant="outlined"
                    icon={<VideoIcon />}
                    href={recipe.strYoutube}
                    clickable
                  />
                  {recipe.strSource && (
                    <Chip
                      className="chip"
                      component="a"
                      target="_blank"
                      label={"website"}
                      variant="outlined"
                      href={recipe.strSource}
                      icon={<LinkIcon />}
                      clickable
                    />
                  )}
                  <Chip
                    className="chip"
                    icon={<FlagIcon />}
                    label={recipe.strArea}
                    variant="outlined"
                  />
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
                </div>
              </div>
              <div className="review-scroll">
                <div className="review-wrapper">
                  <Typography variant="h5">Instructions</Typography>
                  <Typography paragraph>{recipe.strInstructions}</Typography>
                  <Typography variant="h5">Ingredients</Typography>
                  <List>{mapIngredientToMeasure(recipe)}</List>
                </div>
              </div>
            </>
          ) : null}
          {recipe?.notfound && "couldn't find the recipe"}
        </ContentLoader>
      </div>
    </Sidebar>
  );
};
