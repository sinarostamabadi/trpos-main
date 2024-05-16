import { useState } from "react";
import { Button } from "../../../../components/button";
import { CheckBox } from "../../../../components/checkboxes/checkbox";
import { Divider } from "../../../../components/divider";
import {
  IconArrowRight,
  IconDelete,
  IconPen,
} from "../../../../components/icons/icons";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";

const SiteDetail: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Web Site Yönetimi</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Liste</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Site Detayları</p>
      </div>
      <div className="w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-end">
              <div>
                <p className="text-xs text-base-content-40 mt-2">Detaylar</p>
                <h1 className="text-[18px] text-base-content font-medium">
                  Raven Soft Yazılım Şirketi
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setModalIsOpen(true)}
                  variant="primary"
                  isLight={true}
                  className="!text-primary"
                  isInTop
                >
                  <IconPen width={20} height={20} viewBox="0 0 20 20" />
                  Düzenle
                </Button>
                <Button
                  variant="error"
                  isLight={true}
                  className="!text-error"
                  isInTop
                >
                  <IconDelete width={20} height={20} viewBox="0 0 20 20" />
                  Sil
                </Button>
              </div>
            </div>
            <hr className="my-6" />
            <div className="w-full flex-grow">
              <Divider text="Hesap Bilgileri" />
              <div className="flex items-center gap-6 mt-4">
                <Input label="Hakediş Hesap IBAN Numarası" isSimple={true} />
                <Input label="Hesap Sahibi Adı ve Soyadı" isSimple={true} />
              </div>

              <Divider text="WEB Site Bilgileri" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input
                  label="Web Site / İş Yeri / Mağaza Adı"
                  isSimple={true}
                />
                <Input label="Web Site URL Adresi" isSimple={true} />
                <Input label="Taksit Seçeneği" isSimple={true} />
                <Input label="MCC Kodu" isSimple={true} />
              </div>

              <Divider text="API Bilgileri" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input
                  label="Web Site / İş Yeri / Mağaza Adı"
                  isSimple={true}
                />
                <Input label="Web Site URL Adresi" isSimple={true} />
              </div>

              <Divider text="Kayıt Bilgileri" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input label="Kayıt Tarihi" isSimple={true} />
                <Input label="Durum" isSimple={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full grid grid-cols-3 gap-6 p-4 mb-6">
        <div className="w-full bg-actual-white p-6 rounded-2.5xl">
          <h1 className="text-lg text-base-content font-medium">
            Banka Listesi
          </h1>
          <p className="text-sm text-base-content-60 mt-4">
            Mozzarella buffalo wing meatball style white extra. Peppers
            mozzarella tomatoes thin bell lot ipsum pan roll buffalo.
          </p>
          <Button
            variant="primary"
            isLight={true}
            className="!text-primary mt-6"
          >
            İncele
            <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
          </Button>
        </div>
        <div className="w-full bg-actual-white p-6 rounded-2.5xl">
          <h1 className="text-lg text-base-content font-medium">
            Tanımlı Kart Listesi
          </h1>
          <p className="text-sm text-base-content-60 mt-4">
            Mozzarella buffalo wing meatball style white extra. Peppers
            mozzarella tomatoes thin bell lot ipsum pan roll buffalo.
          </p>
          <Button
            variant="primary"
            isLight={true}
            className="!text-primary mt-6"
          >
            İncele
            <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
          </Button>
        </div>
        <div className="w-full bg-actual-white p-6 rounded-2.5xl">
          <h1 className="text-lg text-base-content font-medium">
            Taksit / Komisyon Oranları
          </h1>
          <p className="text-sm text-base-content-60 mt-4">
            Mozzarella buffalo wing meatball style white extra. Peppers
            mozzarella tomatoes thin bell lot ipsum pan roll buffalo.
          </p>
          <Button
            variant="primary"
            isLight={true}
            className="!text-primary mt-6"
          >
            İncele
            <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
          </Button>
        </div>
      </div>
      <Modal
        state={modalIsOpen}
        title="Düzenle"
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
          <Input label="Taksit Seçeneği" />
          <Input label="E-Ticaret Altyapı Sağlayıcı" className="mt-3" />
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

export default SiteDetail;
