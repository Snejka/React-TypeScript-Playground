import { type ReactNode, useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, onClose }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          if (dialogRef.current) {
            dialogRef.current.showModal();
            // showModal() is a built-in method available on the <dialog> element
          }
        },
      };
    });

    // Expose the Component outside the React Tree and attaches it to an element
    return createPortal(
      <dialog className="modal" onClose={onClose} ref={dialogRef}>
        {children}
      </dialog>,
      document.getElementById("modal-root")!
    );
  }
);

export default Modal;
