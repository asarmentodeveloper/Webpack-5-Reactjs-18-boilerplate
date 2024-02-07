import React from "react";
import { Logo } from "../../atoms";
import { MainNavigation } from "../../molecules/Nav/MainNavigation";
import style from "./Header.scss";

interface HeaderProps {
  showNavigation?: boolean;
}

export const Header = (props: HeaderProps) => {
  const { showNavigation } = props;
  return (
    <header className={`${style.header}`}>
      <Logo size="large" customClasses={style["header-logo"]} />
      {showNavigation && <MainNavigation />}
    </header>
  );
};

Header.defaultProps = {
  showNavigation: true,
};
