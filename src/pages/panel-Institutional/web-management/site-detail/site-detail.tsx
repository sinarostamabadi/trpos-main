import { useState } from "react";
import { Button } from "../../../../components/button";
import { CheckBox } from "../../../../components/checkboxes/checkbox";
import { Divider } from "../../../../components/divider";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconDelete,
  IconPen,
} from "../../../../components/icons/icons";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { Link } from "react-router-dom";
import { DeleteModal } from "../../../../components/actionModals/delete";
import { InstallmentRow } from "../../../../components/installment-row/installment-row";
import akbank from "../../../../assets/images/Akbank_logo logo.png";
import qnt from "../../../../assets/images/Finansbank_Logo logo.png";
import garanti from "../../../../assets/images/Garanti_BBVA_Logo logo.png";
import group from "../../../../assets/images/Group.png";
import maxumim from "../../../../assets/images/maximum.png";
import world from "../../../../assets/images/world.png";

const SiteDetail: React.FC = () => {
  const [modalsData, setModalsData] = useState<{
    type: "edit" | "delete" | "banks" | "card" | "installment" | "else";
    data: any;
  }>({
    type: "else",
    data: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function handleOpenModal(data: typeof modalsData) {
    setModalsData(data);
    setModalIsOpen(true);
  }

  const modalsTitleAndSubTitle: Record<
    NonNullable<(typeof modalsData)["type"]>,
    { title: string; subTitle: string }
  > = {
    edit: {
      title: "Düzenle",
      subTitle: "Lütfen formu doldurunuz.",
    },
    banks: {
      title: "Banka Listesi",
      subTitle:
        "Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth.",
    },
    card: {
      title: "Tanımlı Kart Listesi",
      subTitle:
        "Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth.",
    },
    installment: {
      title: "Taksit / Komisyon Oranları",
      subTitle:
        "Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth.",
    },
    delete: {
      title: "Siteyi Sil",
      subTitle:
        "Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth.",
    },
    else: {
      title: "",
      subTitle: "",
    },
  };

  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Web Site Yönetimi</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <Link to={"/dashboard/Institutional/webManagement"}>Liste</Link>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Site Detayları</p>
      </div>
      <div className="w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-end">
              <div>
                <p className="text-xs text-base-content-40 mt-2">Detaylar</p>
                <h1 className="text-[20px] text-base-content font-semibold">
                  Raven Soft Yazılım Şirketi
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => handleOpenModal({ type: "edit", data: "" })}
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
                  onClick={() => setModalsData({ type: "delete", data: "" })}
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
            onClick={() => handleOpenModal({ type: "banks", data: "" })}
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
            onClick={() => handleOpenModal({ type: "card", data: "" })}
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
            onClick={() => handleOpenModal({ type: "installment", data: "" })}
            variant="primary"
            isLight={true}
            className="!text-primary mt-6"
          >
            İncele
            <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
          </Button>
        </div>
      </div>
      <DeleteModal
        state={modalIsOpen && modalsData.type === "delete"}
        confirmLabel={modalsTitleAndSubTitle[modalsData.type].title}
        subTitle={modalsTitleAndSubTitle[modalsData.type].subTitle}
        onCloseModal={() => handleOpenModal({ type: "else", data: "" })}
      />
      <Modal
        state={modalIsOpen}
        title={modalsTitleAndSubTitle[modalsData.type!].title}
        small={true}
        onCloseModal={() => setModalIsOpen(false)}
        subTitle={modalsTitleAndSubTitle[modalsData.type!].subTitle}
      >
        {modalsData.type === "edit" && (
          <>
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
              <Input
                label="Başarılı İşlem Yönelnedirme Adresi"
                className="mt-3"
              />
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
          </>
        )}
        {modalsData.type === "banks" && (
          <>
            <div className="p-1 border-t">
              <div className="text-sm flex items-center my-6">
                <span className="text-base-content-60">Site : </span>
                <span className="font-medium underline">
                  Kahraman Beyaz Eşya
                </span>
                <span>
                  <IconArrowUpRight
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  />
                </span>
              </div>
              <div>
                <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl">
                  <img src={akbank} alt="" />
                </div>
                <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl mt-4">
                  <img src={qnt} alt="" />
                </div>
                <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl mt-4">
                  <img src={garanti} alt="" />
                </div>
              </div>
            </div>
          </>
        )}
        {modalsData.type === "card" && (
          <>
            <div className="p-1 border-t">
              <div className="text-sm flex items-center my-6">
                <span className="text-base-content-60">Site : </span>
                <span className="font-medium underline">
                  Kahraman Beyaz Eşya
                </span>
                <span>
                  <IconArrowUpRight
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  />
                </span>
              </div>
              <div>
                <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl">
                  <img src={group} alt="" />
                </div>
                <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl mt-4">
                  <img src={maxumim} alt="" />
                </div>
                <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl mt-4">
                  <img src={world} alt="" />
                </div>
              </div>
            </div>
          </>
        )}
        {modalsData.type === "installment" && (
          <>
            <div className="p-1 border-t">
              <Divider text="Peşin Ödemeler" />
              <InstallmentRow title="Kredi Kartı" data="%1" />
              <InstallmentRow title="Debit (Banka) Kartı" data="%2 + 10 TL" />
              <InstallmentRow title="Yurt Dışı Kartı" data="%3" />

              <Divider text="Taksitli Ödemeler" className="!mt-10" />
              <InstallmentRow title="2 Taksit" data="%2 + 10 TL" />
              <InstallmentRow title="3 Taksit" data="%3" />
              <InstallmentRow title="4 Taksit" data="%6" />
              <InstallmentRow title="6 Taksit" data="%10 + 50 TL" />
              <InstallmentRow title="9 Taksit" data="%10 + 50 TL" />
              <InstallmentRow
                title="12 Taksit"
                data="%10 + 50 TL"
                isLast={true}
              />
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default SiteDetail;
