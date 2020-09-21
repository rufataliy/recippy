import React, { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import "../asssets/styles/review.css"

interface Props {
    open: boolean;
    toggleView: () => void;
    idMeal: string
}

export const RecipeView: React.FC<Props> = ({ open, toggleView, idMeal }) => {
    const [recipe, setRecipe] = useState<Recipe | null>(null)

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal)
            .then((res) => {
                return res.json();
            })
            .then((data) => setRecipe(data.meals[0]));
    }, [idMeal])

    return (
        <Sidebar position={"right"} open={open} toggleSidebar={toggleView}>
            <div className="review-area">
                {recipe != null ? (
                    <>
                        <div className="review-img">
                            <img src={recipe.strMealThumb} alt="" />
                        </div>
                        <div className="review-wrapper">
                            <Typography variant="h4">
                                {recipe.strMeal}
                            </Typography>
                        </div>
                        <div className="review-scroll">
                            <div className="review-wrapper">
                                <Typography paragraph >
                                    {recipe.strInstructions}
                                </Typography>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </Sidebar>
    )
}