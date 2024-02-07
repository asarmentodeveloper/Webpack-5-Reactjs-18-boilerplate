import React from "react";
import { LandingPageTemplate } from "../templates/LandingPageTemplate";
import { ButtonLink } from "../atoms";

export const LandingPageCampaing = () => {
  return (
    <LandingPageTemplate>
      <h2>My awesome landing page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <div className="u-box-centralize-elem">
        <ButtonLink to={"/"}>Go to Home page</ButtonLink>
      </div>
    </LandingPageTemplate>
  );
};
