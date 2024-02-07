import React from "react";
import styles from "./MainNavigation.scss";
import NavigationLink from "./NavigationLink";

export const MainNavigation = () => {
  return (
    <nav className={`${styles.wrapper} u-border-bottom`}>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/about">About</NavigationLink>
    </nav>
  );
};
