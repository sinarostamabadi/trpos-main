import { MenuProps } from "antd/es/menu";
import { MdLogout } from "react-icons/md";
import { TbActivity } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { createData } from "../core/http-service";
import { api } from "../api";
import { AxiosRequestHeaders } from "axios";

export const items: MenuProps["items"] = [
  {
    label: <a className="text-base py-1">Bildirimler</a>,
    icon: <RiNotification2Line size={18} />,
    key: "0",
  },
  {
    label: (
      <a className="text-base py-1" href="/dashboard/settings">
        Ayarlar
      </a>
    ),
    icon: <MdOutlineSettings size={18} />,
    key: "1",
  },
  {
    label: <a className="text-base py-1">Aktivite</a>,
    icon: <TbActivity size={18} />,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: <a className="text-base py-1">Çıkış Yap</a>,
    icon: <MdLogout size={18} />,
    onClick: async () => {
      try {
        const response = await createData(api.AuthApi.logout, null, {
          Authorization: `Bearer ${localStorage.trpos__access_token}`,
        } as AxiosRequestHeaders);
        if (response) {
          window.location.href = "/";
          localStorage.removeItem("trpos__access_token");
          localStorage.removeItem("trpos__user_info");
          localStorage.removeItem("trpos__user_type");
          localStorage.removeItem("trpos__token_expire");
        }
      } catch (error) {
        console.log(error);
      }
    },
    key: "4",
    // danger: true,
    // disabled: true,
  },
];
