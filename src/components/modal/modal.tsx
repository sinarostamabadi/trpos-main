import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ModalProps } from "./modal.types";
import { IconClose } from "../icons/icons";

export const Modal = ({
  state,
  title,
  children,
  small,
  onCloseModal,
}: ModalProps) => {
  // ---------- variables ----------
  const contentStyle = {
    borderRadius: "32px",
    border: "none",
    maxHeight: "95vh",
    width: small ? "600px" : "800px",
    overflow: "visible",
    padding: "30px",
  };

  // ---------- render jsx ----------
  return (
    <Popup
      open={state}
      position="center center"
      modal
      onClose={onCloseModal}
      {...{ contentStyle }}
    >
      <div className="flex justify-between w-full my-3">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="cursor-pointer mt-1">
          <IconClose color="red" onClick={onCloseModal} />
        </span>
      </div>
      {children}
    </Popup>
  );
};
