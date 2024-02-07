import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import style from "./Logo.scss";

interface LogoProps {
  size?: "small" | "medium" | "large";
  customClasses?: "string";
}

export const Logo = (props: LogoProps) => {
  const { customClasses, size } = props;

  const logoSize = `logo-${size ? size : "small"}`;

  const classList = `${style[logoSize]} ${
    customClasses ? customClasses : ""
  }`.trim();

  return <img alt="AS logo" src="./logo.svg" className={classList} />;
};
