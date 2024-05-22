import { Button } from "../../../components/button";
import {
  IconArrowRight,
  IconEyeComplete,
  IconPen,
  IconPlus,
} from "../../../components/icons/icons";
import { Modal } from "../../../components/modal";
import { useState } from "react";
import { Divider } from "../../../components/divider";
import { Input } from "../../../components/input";
import { SelectInput } from "../../../components/select";
import { CheckBox } from "../../../components/checkboxes";
import { FileUploader } from "../../../components/uploader";
import clouds from "../../../assets/images/Clouds.svg";
import { Table } from "../../../components/table";
import { TableColumn } from "react-data-table-component";
import { BadgeProps } from "../../../components/badge/badge.type";
import { Badge } from "../../../components/badge";
import { Link } from "react-router-dom";

const badgeText: Record<BadgeProps["badgeColor"], string> = {
  primary: "Onay Bekliyor",
  success: "Aktif",
  error: "Kapandı",
};

const WebManagement: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [stateData, setStateData] = useState<boolean>(true);

  type DataType = {
    id: number;
    site: string;
    url: string;
    installment: string;
    badge: BadgeProps["badgeColor"];
  };

  const columns: TableColumn<DataType>[] = [
    {
      name: "Sıra",
      selector: (row) => row.id,
      grow: 1,
    },
    {
      name: "Site / işletme / Mağaza Adı",
      selector: (row) => row.site,
      grow: 4,
      style: { color: "black", fontWeight: "500" },
    },
    {
      name: "URL",
      selector: (row) => row.url,
      grow: 2,
    },
    {
      name: "Taksit",
      selector: (row) => row.installment,
      grow: 2,
    },
    {
      name: "Durum",
      cell: (row) => (
        <Badge badgeColor={row.badge} text={badgeText[row.badge]} />
      ),
      grow: 4,
    },
    {
      name: "",
      cell: () => (
        <div className="flex flex-col gap-1 2xl:flex-row 2xl:gap-0 items-center">
          <Button isLink={true} className="hover:no-underline">
            <IconEyeComplete
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="text-primary"
            />
            <Link to="/dashboard/Institutional/siteDetail/1">Görüntüle</Link>
          </Button>
          <Button isLink={true} className="hover:no-underline !text-orange">
            <IconPen
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="text-orange"
            />
            Düzenle
          </Button>
        </div>
      ),
      grow: 5,
    },
  ];

  const data: DataType[] = [
    {
      id: 1,
      site: "Raven Soft",
      url: "raven.com.tr",
      installment: "Peşin",
      badge: "primary",
    },
    {
      id: 2,
      site: "Trpos Ödeme Şirketi",
      url: "trpos.com",
      installment: "3 Taksit",
      badge: "success",
    },
    {
      id: 3,
      site: "Migros",
      url: "migros.com",
      installment: "6 Taksit",
      badge: "error",
    },
  ];

  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Web Site Yönetimi</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Liste</p>
      </div>
      <div className="outlet w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[20px] text-base-content font-semibold">
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
                  isInTop
                >
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Site Ekle
                </Button>
              </div>
            </div>
            {stateData ? (
              <div className="w-full flex-grow mt-6">
                <Table columns={columns} data={data} />
              </div>
            ) : (
              <div className="outlet w-full h-full flex-grow flex justify-center items-center">
                <div className="text-center">
                  <img src={clouds} alt="" />
                  <h1 className="text-base-content mt-2">
                    Hiç bir site eklemedin
                  </h1>
                  <p className="text-xs text-base-content-40 mt-1">
                    Şimdilik...
                  </p>
                </div>
              </div>
            )}
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
