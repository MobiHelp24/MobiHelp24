import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { MouseEvent, useEffect } from "react";
import NewFeedback from "../Feedback/NewFeedback";
const modalRoot = document.getElementById("modal-root");

interface IModal {
  setModalHide: (newValue: boolean) => void;
}

const Modal = ({ setModalHide}: IModal): JSX.Element => {
  useEffect(() => {
    window.addEventListener("keydown", addKeyDown);
    return () => {
      window.removeEventListener("keydown", addKeyDown);
    };
  });

  const addKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === "Escape") {
      setModalHide(false);
    }
  };

  const addOverlay = (evt: MouseEvent<HTMLDivElement>) => {
    if (evt.currentTarget === evt.target) {
      setModalHide(false);
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={addOverlay}>
          <NewFeedback setModalHide={ setModalHide} />
    </div>,
    modalRoot as HTMLElement
  );
};

export default Modal;