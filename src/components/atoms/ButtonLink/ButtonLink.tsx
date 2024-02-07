import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import style from "./ButtonLink.scss";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  const { to } = props;

  return (
    <Link to={to} className={`${style.link} button`}>
      {props.children}
    </Link>
  );
};
