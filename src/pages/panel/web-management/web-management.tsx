import { Button } from "../../../components/button";
import {
  IconArrowRight,
  IconFileUpload,
  IconPlus,
} from "../../../components/icons/icons";
import clouds from "../../../assets/images/Clouds.svg";
import { Modal } from "../../../components/modal";
import { useState } from "react";
import { Divider } from "../../../components/divider";
import { Input } from "../../../components/input";
import { SelectInput } from "../../../components/select";
import { CheckBox } from "../../../components/checkboxes";

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
        <div className="p-1">
          <SelectInput
            placeholder="Taksit Seçeneği"
            options={[]}
            error={""}
            isError={false}
          />
          <SelectInput
            placeholder="E-Ticaret Altyapı Sağlayıcı"
            className="mt-3"
            options={[]}
            error={""}
            isError={false}
          />
          <div className="w-full p-4 flex justify-center items-center border-2 border-dashed to-base-content-20 mt-3 rounded-2xl">
            <label
              htmlFor="FileInput"
              className="text-center flex flex-col justify-center items-center gap-1 cursor-pointer"
            >
              <IconFileUpload />
              <p className="text-sm">Dekont Yükle</p>
              <p className="text-xs text-base-content-40">
                Sürükle bırak ya da Seç
              </p>
            </label>
            <input type="file" name="" id="FileInput" className="hidden" />
          </div>
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
