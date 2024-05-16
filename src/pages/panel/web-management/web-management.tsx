import { Button } from "../../../components/button";
import { IconArrowRight, IconPlus } from "../../../components/icons/icons";
import { Modal } from "../../../components/modal";
import { useState } from "react";
import { Divider } from "../../../components/divider";
import { Input } from "../../../components/input";
import { SelectInput } from "../../../components/select";
import { CheckBox } from "../../../components/checkboxes";
import { FileUploader } from "../../../components/uploader";
import clouds from "../../../assets/images/Clouds.svg";

const WebManagement: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Web Site Yönetimi</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Liste</p>
      </div>
      <div className="w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[18px] text-base-content font-medium">
                  Web Siteleriniz
                </h1>
                <p className="text-xs text-base-content-40 mt-2">
                  Lorem, ipsum.
                </p>
              </div>
              <div>
                <Button
                  onClick={() => setModalIsOpen(true)}
                  variant="primary"
                  className="text-sm !rounded-2xl"
                >
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Site Ekle
                </Button>
              </div>
            </div>
            <div className="w-full h-full flex-grow flex justify-center items-center">
              <div className="text-center">
                <img src={clouds} alt="" />
                <h1 className="text-base-content mt-2">
                  Hiç bir site eklemedin
                </h1>
                <p className="text-xs text-base-content-40 mt-1">Şimdilik...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        state={modalIsOpen}
        title="Yeni Site Ekle"
        small={true}
        onCloseModal={() => setModalIsOpen(false)}
        subTitle="Lütfen formu doldurunuz."
      >
        <Divider text="Hesap Bilgileri" />
        <div className="p-1">
          <Input label="Hakediş Hesap IBAN Numarası" />
          <Input label="Hesap Sahibi Adı Soyadı" className="mt-3" />
          <Input label="Banka Hesabı Başlığı" className="mt-3" />
        </div>

        <Divider text="Web Site Bilgileri" />
        <div className="p-1">
          <Input label="Web Site Başlığı" />
          <Input label="Web Site / İş Yeri / Mağaza Adı" className="mt-3" />
          <Input label="Web Site URL Adresi" className="mt-3" />
          <Input label="Başarılı İşlem Yönelnedirme Adresi" className="mt-3" />
          <Input label="Hatalı İşlem Yönlendirme Adresi" className="mt-3" />
          <Input label="Web Site IP Adresi" className="mt-3" />
        </div>

        <Divider text="Diğer Bilgiler" />
        <div className="p-1 flex flex-col gap-y-3">
          <SelectInput
            placeholder="Taksit Seçeneği"
            options={[]}
            error={""}
            isError={false}
          />
          <SelectInput
            placeholder="E-Ticaret Altyapı Sağlayıcı"
            options={[]}
            error={""}
            isError={false}
          />
          <FileUploader />
        </div>

        <CheckBox
          id="checkbox"
          isChecked={false}
          label="Bilgilerin doğruluğunu onaylıyorum."
          className="mt-4 !text-sm !font-normal"
        />

        <Button
          variant="primary"
          shape="full"
          size="medium"
          className="mt-6 !text-base !font-medium"
        >
          Onaya Gönder
        </Button>
      </Modal>
    </>
  );
};

export default WebManagement;
