import { type ComponentPropsWithoutRef, useRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
};

export default function Input({ id, label, ...rest }: InputProps) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}
