import React from "react";
import Typography from "@material-ui/core/Typography";
import { default as Vegan } from "./vegan.svg";
import { default as Beef } from "./beef.svg";
import { default as Breakfast } from "./breakfast.svg";
import { default as Chicken } from "./chicken.svg";
import { default as Dessert } from "./dessert.svg";
import { default as Goat } from "./goat.svg";
import { default as Lamb } from "./lamb.svg";
import { default as Pasta } from "./pasta.svg";
import { default as Pork } from "./pork.svg";
import { default as Seafood } from "./seafood.svg";
import { default as Side } from "./side.svg";
import { default as Starter } from "./starters.svg";
import { default as Vegetarian } from "./vegetarian.svg";

interface Categories {
  [key: string]: {
    img: string;
    attr: JSX.Element;
  };
}

export const categories: Categories = {
  Vegan: {
    img: Vegan,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/free-icon/broccoli_2916159?term=vegetarian&page=2&position=85"
          title="surang"
        >
          surang
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Beef: {
    img: Beef,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Breakfast: {
    img: Breakfast,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a href="https://smashicons.com/" title="Smashicons">
          Smashicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Chicken: {
    img: Chicken,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Dessert: {
    img: Dessert,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/free-icon/cupcake_992800?term=muffin&page=7&position=79"
          title="monkik"
        >
          monkik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Goat: {
    img: Goat,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/mynamepong"
          title="mynamepong"
        >
          mynamepong
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Lamb: {
    img: Lamb,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Pasta: {
    img: Pasta,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/free-icon/spaguetti_701980?term=pasta&page=3&position=24"
          title="monkik"
        >
          monkik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Pork: {
    img: Pork,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/free-icon/spaguetti_701980?term=pasta&page=3&position=24"
          title="monkik"
        >
          monkik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Seafood: {
    img: Seafood,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/those-icons"
          title="Those Icons"
        >
          Those Icons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Side: {
    img: Side,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Starter: {
    img: Starter,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
  Vegetarian: {
    img: Vegetarian,
    attr: (
      <Typography paragraph>
        Icons made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    ),
  },
};
