import { Button } from "../../button";
import { Modal } from "../../modal";
import { ActionModalProps } from "../action-modal.types";
import DeleteIcon from "../../../assets/images/RemoveCircleLight.svg";

export const ErrorModal: React.FC<ActionModalProps> = ({
  state,
  subTitle,
  confirmLabel,
  onCloseModal,
}) => {
  return (
    <Modal
      state={state}
      title="Başvurunuzu alamıyoruz."
      subTitle={subTitle}
      icon={<img src={DeleteIcon} width={50} />}
      onCloseModal={onCloseModal}
      isDeleteModal
      small
    >
      <div className="flex gap-x-6 mt-3">
        <Button variant="primary" shape="full" isOutline onClick={onCloseModal}>
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
