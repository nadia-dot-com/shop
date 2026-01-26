import { CSSProperties, ReactNode } from "react";

import classes from "./Button.module.css";
import { cn } from "../../utils/cn";

type Button = {
  bgColor: string;
  textColor: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
};

export function Button({
  bgColor,
  textColor,
  text,
  type,
  onClick,
  children,
  disabled,
}: Button) {
  const style: CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button
      className={cn(classes.button, disabled && classes.disabled)}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {text}
    </button>
  );
}
