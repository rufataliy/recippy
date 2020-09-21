import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { MenuIcon } from "./icons";
import "../asssets/styles/header.css";

interface Props {
  toggleSidebar: () => void;
}

export const Header: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <IconButton
          onClick={toggleSidebar}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <p>Logo</p>
      </Toolbar>
    </AppBar>
  );
};
