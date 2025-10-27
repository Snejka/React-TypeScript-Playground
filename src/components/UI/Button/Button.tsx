import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

import styles from "./Button.module.scss";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonType = BaseProps & ComponentPropsWithoutRef<"button">;

type LinkType = BaseProps & LinkProps & { to: string };

type ButtonProps = ButtonType | LinkType;

export default function Button(props: ButtonProps) {
  const cssClass = `${styles.button} ${props.textOnly ? styles['button--text-only'] : ""}`;
  const isLink = "to" in props;

  if (isLink) {
    const { children, textOnly, ...rest } = props;

    return (
      <Link className={cssClass} {...rest}>
        {children}
      </Link>
    );
  } else {
    const { children, textOnly, ...rest } = props;

    return (
      <button className={cssClass} {...rest}>
        {children}
      </button>
    );
  }
}
