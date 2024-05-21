import { useNavigate } from "react-router-dom";
import { Button } from "../../button";
import { Modal } from "../../modal";
import { ActionModalProps } from "../action-modal.types";
import CheckCircleLight from "../../../assets/images/CheckCircleLight.svg";

export const SuccessModal: React.FC<ActionModalProps> = ({
  state,
  title,
  subTitle,
  confirmLabel,
  onCloseModal,
}) => {
  const navigate = useNavigate();

  return (
    <Modal
      state={state}
      title={title ? title : "Ön başvurunuzu aldık."}
      subTitle={subTitle}
      icon={<img src={CheckCircleLight} width={50} />}
      onCloseModal={onCloseModal}
      isDeleteModal
      small
    >
      <div className="flex gap-x-6 mt-3">
        <Button
          variant="primary"
          shape="full"
          isOutline
          onClick={() => navigate("/dashboard")}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
