import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { ContentArea } from "@/views";
import { hire_me } from "@/asssets/img";
import "@/asssets/styles/hireme.css";

export const HireMe = () => {
  return (
    <ContentArea>
      <div className="hire-me">
        <div className="hire-me-img-lg">
          <img src={hire_me} alt="developer working image - hire-me page" />
        </div>
        <div className="hire-me-content">
          <div>
            <Typography variant="h4">Hire me</Typography>
            <div className="hire-me-img-sm">
              <img src={hire_me} alt="developer working image - hire-me page" />
            </div>
            <Typography paragraph>
              This is a small project of mine inspired by my love to cooking. If
              you think we could make a great team and build awesome
              applications check out my other{" "}
              <Link href="https:rufataliyev.com/projects">projects</Link> and{" "}
              <Link href="https:rufataliyev.com/contact">contact</Link> me.
            </Typography>
          </div>
        </div>
      </div>
    </ContentArea>
  );
};
