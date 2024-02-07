import React from "react";
import styles from "./Template.scss";
import { Header } from "../organisms";

interface LandingPageTemplateProps {
  children: React.ReactNode;
}

export const LandingPageTemplate = (props: LandingPageTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header showNavigation={false} />
      <main className={styles.wrapper}>{props.children}</main>
    </div>
  );
};
