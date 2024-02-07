import React from "react";
import { ButtonLink } from "../atoms";
import { BasicTemplate } from "../templates/BasicTemplate";

export const Root = () => {
  return (
    <BasicTemplate>
      <h1>Home page</h1>
      <p>just some test content here</p>
      <div className="u-box-centralize-elem">
        <ButtonLink to="/aboutss">broken link</ButtonLink>
        <ButtonLink to="/myawesomemarketingcampaign">landing page</ButtonLink>
      </div>
    </BasicTemplate>
  );
};
