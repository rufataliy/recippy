import React from "react";
import { loader } from "@/asssets/img";
import { LOADER } from "@/common/testIds";

interface Props {
  loading: boolean;
}

export const ContentLoader: React.FC<Props> = ({ children, loading }) => {
  return loading ? (
    <img className="loader" data-testid={LOADER} src={loader} alt="loader" />
  ) : (
    <>{children}</>
  );
};
