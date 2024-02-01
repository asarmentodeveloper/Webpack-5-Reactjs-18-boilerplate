import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import style from './Button.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  position?: 'left' | 'right';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps> ((props, ref) => {
  const {position, ...ButtonProps} = props;

  return (
    <button ref={ref} className={`${style['submit-124']} ${style['my-button']}`} {...ButtonProps}>
      {props.children}
    </button>
  );
});

export default Button;