import React from "react";
import ReactDOM from "react-dom";
import { css } from "emotion";
import usePortal from "../hooks/usePortal";

const modalStyle = css({
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.3)"
});

const modalContainerClass = css({
  padding: "20px",
  background: "#fff",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  minHeight: "300px",
  minWidth: "300px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  justifySelf: "center"
});

const modalContentClass = css({
  maxHeight: "500px"
});

const onCloseButtonClass = css({
  margin: "0 1rem"
});

const ModalContainer = ({ children, onClose }) => {
  return (
    <div className={modalStyle}>
      <div className={modalContainerClass}>
        <div className={modalContentClass}>{children}</div>
        <button className={onCloseButtonClass} type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ({ children, onClose }) => {
  const target = usePortal("modal");

  return ReactDOM.createPortal(
    <ModalContainer onClose={onClose}>{children}</ModalContainer>,
    target
  );
};
