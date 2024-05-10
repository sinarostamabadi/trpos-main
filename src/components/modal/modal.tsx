// import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ModalProps } from "./modal.types";
import { IconClose } from "../icons/icons";
import { useState } from "react";

export const Modal = ({
  state,
  title,
  children,
  small,
  onCloseModal,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(state!);

  // ---------- variables ----------
  const contentStyle = {
    borderRadius: "32px",
    border: "none",
    maxHeight: "95vh",
    width: small ? "600px" : "900px",
    overflow: "visible",
    padding: "20px",
  };

  // ---------- render jsx ----------
  return (
    <Popup
      open={isOpen}
      position="center center"
      modal
      onClose={() => onCloseModal && onCloseModal()}
      {...{ contentStyle }}
    >
      <div className="flex justify-between w-full my-3">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="cursor-pointer mt-1">
          <IconClose color="red" onClick={() => setIsOpen(false)} />
        </span>
      </div>
      {children}
    </Popup>
  );
};
