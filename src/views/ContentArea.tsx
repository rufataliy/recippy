import React from "react";
import "../asssets/styles/content.css";

export const ContentArea: React.FC = ({ children }) => {
  return (
    <div className="content">
      <div className="content-wrapper">
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
};
