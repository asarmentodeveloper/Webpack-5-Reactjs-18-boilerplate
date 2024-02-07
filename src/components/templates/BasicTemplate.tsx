import React from "react";
import styles from "./Template.scss";
import { Header } from "../organisms";

interface BasicTemplateProps {
  children: React.ReactNode;
}

export const BasicTemplate = (props: BasicTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.wrapper}>{props.children}</main>
    </div>
  );
};
