import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import style from "./Button.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  position?: "left" | "right";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { position, ...ButtonProps } = props;

    return (
      <button ref={ref} {...ButtonProps}>
        {props.children}
      </button>
    );
  }
);
