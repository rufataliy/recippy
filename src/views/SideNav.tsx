import React from "react";
import { Sidebar } from "./Sidebar"
import { Nav } from "./Nav"
import "../asssets/styles/sidebar.css";

interface Props {
  open: boolean;
  toggleNav: () => void;
}

export const SideNav: React.FC<Props> = ({ open, toggleNav }) => {
  return (
    <Sidebar open={open} toggleSidebar={toggleNav}>
      <div className="sidebar">
        <Nav />
      </div>
    </Sidebar>
  );
};
