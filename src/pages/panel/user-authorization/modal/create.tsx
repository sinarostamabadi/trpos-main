import { Button } from "../../../../components/button";
import { Devider } from "../../../../components/divider";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { SelectInput } from "../../../../components/select";
import { ModalProps } from "../../../../types/modal.types";

export const CreateUserAuthentication: React.FC<ModalProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      state={state}
      onCloseModal={onCloseModal}
      title="Yeni Kullanıcı Ekle"
      subTitle="Lütfen formu doldurunuz."
      small
    >
      <form className="flex flex-col gap-3 pe-2">
        <Devider text="Genel Bilgiler" />
        <Input label="Adı - Soyadı" />
        <Input label="Telefonu" />
        <Input label="E-Posta Adresi" />
        <SelectInput placeholder="Görev" />
        <Button variant="primary" className="mt-2">
          Ekle
        </Button>
      </form>
    </Modal>
  );
};
