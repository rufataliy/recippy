import React from "react";
import { loader } from "../asssets/img";

interface Props {
  loading: boolean;
}

export const ContentLoader: React.FC<Props> = ({ children, loading }) => {
  return loading ? (
    <img className="loader" src={loader} alt="loader" />
  ) : (
    <>{children}</>
  );
};
