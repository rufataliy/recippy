import React, { useState } from "react";
import { Header, SideNav } from "@/views";

export const Layout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <SideNav toggleNav={toggleSidebar} open={sidebarOpen} />
      {children}
    </>
  );
};
