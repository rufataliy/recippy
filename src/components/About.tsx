import React from "react";
import { ContentArea } from "@/views";
import { about } from "@/asssets/img";
import Typography from "@material-ui/core/Typography";
import "@/asssets/styles/about.css";

export const About = () => {
  return (
    <ContentArea>
      <div className="about">
        <div className="about-img-lg">
          <img src={about} alt="vegetables - about page" />
        </div>
        <div className="about-content">
          <div>
            <Typography variant="h4">What is Recippy?</Typography>
            <Typography paragraph>
              Recippy is a simple recipe searching app that looks up for meal
              names in database provided by MealDB. Recipes include
              instructions, list of ingredients, video instruction and link to
              original website.
            </Typography>
          </div>
          <div className="about-img-sm">
            <img src={about} alt="vegetables - about page" />
          </div>
          <div>
            <Typography variant="h4">Features</Typography>
            <Typography paragraph>
              You can review and save recipes in your browser. Upcoming features
              include adding new recipes into the database.
            </Typography>
          </div>
        </div>
      </div>
    </ContentArea>
  );
};
