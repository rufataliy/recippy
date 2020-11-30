import React from "react";
import Link from "next/link";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { HomeIcon, AboutIcon, WorkIcon, FavoriteIcon } from "@/views/icons";
import "@/asssets/styles/nav.css";

export const Nav: React.FC = () => {
  return (
    <List>
      <Link href="/">
        <a>
          <ListItem button key={"home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <ListItem button key={"about"}>
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </a>
      </Link>
      <Link href="/credits">
        <a>
          <ListItem button key={"credits"}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary={"Credits"} />
          </ListItem>
        </a>
      </Link>
      <Divider />
      <Link href="/hire_me">
        <a>
          <ListItem button key={"hireme"}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Hire me"} />
          </ListItem>
        </a>
      </Link>
    </List>
  );
};
