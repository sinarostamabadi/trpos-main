import { Button } from "../../../../components/button";
import { Modal } from "../../../../components/modal";
import { PhoneInput } from "../../../../components/phoneInput";
import { SettingModalsProps } from "./setting-modals.types";

export const EditPhone: React.FC<SettingModalsProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      title="Telefon Numaramı Değiştir"
      subTitle="Telefon numaranızı güncelleyebilirsiniz."
      state={state}
      onCloseModal={onCloseModal}
      small
    >
      <form className="flex flex-col gap-y-2 mt-4">
        <PhoneInput label="Mevcut Telefon Numaranız" />
        <PhoneInput label="Yeni Telefon Numaranız" />
        <Button variant="primary" shape="full" className="my-2">
          Devam Et
        </Button>
      </form>
    </Modal>
  );
};
