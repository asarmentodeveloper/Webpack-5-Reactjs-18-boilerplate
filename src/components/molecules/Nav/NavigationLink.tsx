import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.scss";

interface NavigationLinkProps {
  children: ReactNode;
  to: string;
}
const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        [, isActive ? styles["link-active"] : "", styles.link].join(" ")
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  );
};

export default NavigationLink;
