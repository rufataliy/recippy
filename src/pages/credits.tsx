import React from "react";
import Typography from "@material-ui/core/Typography";
import { ContentArea } from "@/views";
import { categories } from "@/asssets/img";
import { about, hire_me, react, material } from "@/asssets/img";
import "@/asssets/styles/credits.css";

const renderIcons = () => {
  const keys = Object.keys(categories);
  return keys.map((key) => {
    return (
      <div className="credits-img">
        <img src={categories[key].img} alt={key} />
        {categories[key].attr}
      </div>
    );
  });
};

const Credits = () => {
  return (
    <ContentArea>
      <div className="credits">
        <div className="api">
          <Typography variant="h4">Api</Typography>
          <div className="credits-content">
            <Typography paragraph>
              All the recipes are provided by{" "}
              <a href="https://www.themealdb.com/">TheMealDB</a> an open,
              crowd-sourced database of Recipes from around the world.
            </Typography>
          </div>
        </div>
        <div className="icons">
          <Typography variant="h4">Icons</Typography>
          <div className="credits-content horizontal-scroll">
            {renderIcons()}
          </div>
        </div>
        <div className="images">
          <Typography variant="h4">Images</Typography>
          <div className="credits-content">
            <a href="https://www.freepik.com/vectors/food">
              <div className="credits-img">
                <img src={about} alt="about" />
                <Typography paragraph>
                  Food vector created by macrovector - www.freepik.com
                </Typography>
              </div>
            </a>
            <a href="http://www.freepik.com">
              <div className="credits-img">
                <img src={hire_me} alt="hire me" />

                <Typography paragraph>
                  {" "}
                  Designed by pch.vector / Freepik
                </Typography>
              </div>
            </a>
          </div>
        </div>
        <div className="techno">
          <Typography variant="h4">Technologies</Typography>
          <div className="credits-content">
            <a href="https://material-ui.com/">
              <div className="credits-img">
                <img src={material} alt="Material UI" />
                <Typography paragraph>Material UI</Typography>
              </div>
            </a>
            <a href="https://reactjs.org/">
              <div className="credits-img">
                <img src={react} alt="React" />
                <Typography paragraph>React</Typography>
              </div>
            </a>
          </div>
        </div>
      </div>
    </ContentArea>
  );
};

export default Credits;
