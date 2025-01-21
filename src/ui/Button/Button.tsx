import React, { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...buttonProps }: ButtonProps) => {
  return <button className={cn(styles.button, className)} {...buttonProps} />;
};
