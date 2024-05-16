import { Badge } from "../../../components/badge/badge";
import { BadgeProps } from "../../../components/badge/badge.type";
import { Button } from "../../../components/button";
import {
  IconArrowRight,
  IconEyeComplete,
  IconPen,
  IconPlus,
  IconSearch,
} from "../../../components/icons/icons";
import { SelectInput } from "../../../components/select";
import { TableColumn } from "react-data-table-component";
import { Table } from "../../../components/table";
import { Link } from "react-router-dom";

const badgeText: Record<BadgeProps["badgeColor"], string> = {
  primary: "Onay Bekliyor",
  success: "Aktif",
  error: "Kapandı",
};

const LinkPayment = () => {
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
            <Link to="/dashboard/siteDetail/1">
              Görüntüle
            </Link>
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
        <p className="text-primary">Ödeme Linkleri</p>
      </div>
      <div className="w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[18px] text-base-content font-medium">
                  Linkleriniz
                </h1>
                <p className="text-xs text-base-content-40 mt-2">
                  Lorem, ipsum.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  isOutline={true}
                  className="text-sm !rounded-2xl !border-base-content-20 !text-base-content-20"
                >
                  <IconSearch
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="text-base-content"
                  />
                  Ara...
                </Button>
                <SelectInput
                  className="!px-4"
                  size="middle"
                  placeholder="5"
                  isError={false}
                />
                <Button variant="primary" className="text-sm !rounded-2xl">
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Link Oluştur
                </Button>
              </div>
            </div>
            <div className="w-full flex-grow mt-6">
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkPayment;
