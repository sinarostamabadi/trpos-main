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
  subTitle,
}: ModalProps) => {
  // ---------- variables ----------
  const contentStyle = {
    borderRadius: "32px",
    border: "none",
    maxHeight: "95vh",
    width: small ? "500px" : "900px",
    overflow: "scroll",
    padding: "20px",
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
        <span className="text-xl font-medium">
          {title}
          {subTitle && (
            <div className="text-[12px] text-base-content-40">{subTitle}</div>
          )}
        </span>
        <span className="cursor-pointer mt-1">
          <IconClose color="red" onClick={onCloseModal} />
        </span>
      </div>
      {children}
    </Popup>
  );
};
