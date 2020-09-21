import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { HomeIcon, AboutIcon, WorkIcon } from "./icons";

export const Nav: React.FC = () => {
    return (
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
    );
};
