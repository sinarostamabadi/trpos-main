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
    overflow: "hidden",
    padding: "20px",
    fontFamily: "inter",
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
            <div className="text-sm mt-2 text-base-content-40">{subTitle}</div>
          )}
        </span>
        <span className="cursor-pointer mt-1">
          <IconClose color="red" onClick={onCloseModal} />
        </span>
      </div>
      <div className="overflow-y-scroll max-h-[80vh]">{children}</div>
    </Popup>
  );
};
