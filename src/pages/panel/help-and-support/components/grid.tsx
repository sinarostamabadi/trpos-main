import { Button } from "../../../../components/button";
import { IconEyeComplete, IconPlus } from "../../../../components/icons/icons";
import { useState } from "react";
import { CreateSupportRequest } from "../modal/create";
import { Badge } from "../../../../components/badge";
import { BadgeProps } from "../../../../components/badge/badge.type";
import { TableColumn } from "react-data-table-component";
import { Table } from "../../../../components/table";

const badgeText: Record<BadgeProps["badgeColor"], string> = {
  primary: "Onay Bekliyor",
  success: "Aktif",
  error: "Kapandı",
};

type DataType = {
  id: number;
  title: string;
  explanation: string;
  ticketNo: string;
  reqDate: string;
  badge: BadgeProps["badgeColor"];
};

export const GridSupport = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const columns: TableColumn<DataType>[] = [
    {
      name: "Sıra",
      selector: (row) => row.id,
      width: "70px",
    },
    {
      name: "Başlık",
      selector: (row) => row.title,
      grow: 2,
      style: { color: "black", fontWeight: "500" },
    },
    {
      name: "Açıklama",
      selector: (row) => row.explanation.substring(0, 50),
      grow: 3,
    },
    {
      name: "Ticket No",
      selector: (row) => row.ticketNo,
      grow: 2,
    },
    {
      name: "Talep Tarihi",
      selector: (row) => row.reqDate,
      grow: 2,
    },
    {
      name: "Durum",
      cell: (row) => (
        <Badge badgeColor={row.badge} text={badgeText[row.badge]} />
      ),
      grow: 2,
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
            Görüntüle
          </Button>
        </div>
      ),
      grow: 4,
    },
  ];

  const data: DataType[] = [
    {
      id: 1,
      title: "Arçelik Televizyon QHD",
      explanation:
        "Anchovies sauce style bacon dolor melted sauce. Thin thin marinara sauce sausage. Wing dolor chicken ham cheese garlic. Pork garlic buffalo ham sausage garlic and. White extra green broccoli bacon pepperoni thin ipsum.",
      ticketNo: "1234567890",
      reqDate: "01.02.2024",
      badge: "primary",
    },
  ];

  const closeModalHandler = () => {
    isOpenModal && setIsOpenModal(false);
  };

  return (
    <>
      <CreateSupportRequest
        state={isOpenModal}
        onCloseModal={closeModalHandler}
      />
      <div className="outlet w-full h-full container p-4 mt-4 pb-8">
        <div className="w-full h-auto bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col mb-10">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[20px] text-base-content font-semibold">
                  Destek Talepleriniz
                </h1>
                <p className="text-xs text-base-content-40 mt-2">
                  Lorem, ipsum.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="primary"
                  className="text-sm !rounded-2xl"
                  onClick={() => setIsOpenModal(true)}
                  isInTop
                >
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Talep Oluştur
                </Button>
              </div>
            </div>
          </div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};
