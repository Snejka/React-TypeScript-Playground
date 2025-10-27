import { type ComponentPropsWithoutRef, useRef } from "react";
import styles from "./Input.module.scss";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
};

export default function Input({ id, label, ...rest }: InputProps) {
  return (
    <div className={styles.control}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}
