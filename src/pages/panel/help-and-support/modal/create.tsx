import TextArea from "antd/es/input/TextArea";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { SelectInput } from "../../../../components/select";
import { ModalProps } from "./modal.types";
import { FileUploader } from "../../../../components/uploader";
import { Button } from "../../../../components/button";

export const CreateSupportRequest: React.FC<ModalProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      state={state}
      onCloseModal={onCloseModal}
      title="Yeni Destek Talebi Oluştur"
      subTitle="Lütfen formu doldurunuz."
    >
      <form className="flex flex-col gap-3 pe-2">
        <SelectInput placeholder="Konu" />
        <SelectInput placeholder="Destek Talebi Açılan Firma" />
        <Input label="Başlık" />
        <TextArea rows={6} placeholder="Mesajınız" className="text_area" />
        <FileUploader />
        <Button variant="primary" className="mt-2">
          Destek Talebi Oluştur
        </Button>
      </form>
    </Modal>
  );
};
