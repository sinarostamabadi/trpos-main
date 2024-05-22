import Popup from "reactjs-popup";
import { ModalProps } from "./modal.types";
import { IconClose } from "../icons/icons";
import "reactjs-popup/dist/index.css";

export const Modal = ({
  state,
  title,
  subTitle,
  children,
  small,
  icon,
  shouldForceSignout,
  isActionModal,
  stepper,
  onCloseModal,
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
      closeOnDocumentClick={isActionModal && !shouldForceSignout ? true : false}
      {...{ contentStyle }}
    >
      {stepper && stepper}
      {stepper && <hr />}
      {isActionModal && <div className="w-fit mx-auto">{icon}</div>}
      <div className={`flex justify-between w-full my-3`}>
        <span
          className={`text-lg font-semibold ${isActionModal && "text-center"}`}
        >
          {title}
          {subTitle && (
            <div className="text-sm mt-2 text-base-content-60 font-normal">
              {subTitle}
            </div>
          )}
        </span>
        {!isActionModal && (
          <span className="cursor-pointer mt-1">
            <IconClose color="red" onClick={onCloseModal} />
          </span>
        )}
      </div>
      <div className="overflow-y-scroll max-h-[80vh]">{children}</div>
    </Popup>
  );
};
