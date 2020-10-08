import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { HomeIcon, AboutIcon, WorkIcon, FavoriteIcon } from "./icons";
import { Link } from "react-router-dom";
import "../asssets/styles/nav.css";

export const Nav: React.FC = () => {
  return (
    <List>
      <Link to="/">
        <ListItem button key={"home"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
      </Link>
      <Link to="about">
        <ListItem button key={"about"}>
          <ListItemIcon>
            <AboutIcon />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
      </Link>
      <Link to="/credits">
        <ListItem button key={"credits"}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={"Credits"} />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/hire_me">
        <ListItem button key={"hireme"}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary={"Hire me"} />
        </ListItem>
      </Link>
    </List>
  );
};
