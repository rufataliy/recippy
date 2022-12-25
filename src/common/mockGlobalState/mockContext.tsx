import React from "react";
import { Context } from "@/store/Context";
import { store } from "./mockStore";

export const StateProvider: React.FC = ({ children }) => {
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
