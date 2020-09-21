import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { HomeIcon, AboutIcon, WorkIcon } from "./icons";
import "../asssets/styles/sidebar.css";

interface Props {
  open: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<Props> = ({ open, toggleSidebar }) => {
  return (
    <Drawer onClose={toggleSidebar} open={open}>
      <div className="sidebar">
        <List>
          <ListItem button key={"home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem button key={"about"}>
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
          <Divider />
          <ListItem button key={"hireme"}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Hire me"} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
