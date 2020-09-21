import React from "react";
import Drawer from "@material-ui/core/Drawer";

interface Props {
    open: boolean;
    toggleSidebar: () => void;
    position?: "left" | "right" | "top" | "bottom";
}

export const Sidebar: React.FC<Props> = ({ open, toggleSidebar, position, children }) => {
    return (
        <Drawer {...position && { anchor: position }} onClose={toggleSidebar} open={open} >
            {children}
        </Drawer>
    );
};
