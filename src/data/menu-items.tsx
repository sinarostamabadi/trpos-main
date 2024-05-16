import {
  IconBank,
  IconClipboard,
  IconLink,
  IconSetting,
  IconSupport,
  IconUser,
  IconWebPage,
} from "../components/icons/icons";
import { MenuItem } from "../types/menu-item.type";

export const menuItems1: {
  [key: string]: MenuItem[];
} = {
  "SANAL POS": [
    {
      title: "Web Site Yönetimi",
      href: "webManagement",
      icon: <IconWebPage width={24} height={24} viewBox="0 0 24 24" />,
    },
    {
      title: "Ödeme Linkleri",
      href: "linkPayment",
      icon: <IconLink width={24} height={24} viewBox="0 0 24 24" />,
    },
    {
      title: "Raporlarım",
      href: "",
      icon: <IconClipboard width={24} height={24} viewBox="0 0 24 24" />,
      isParent: true,
    },
    {
      title: "Kullanıcı Yetkilendirme",
      href: "",
      icon: <IconUser width={24} height={24} viewBox="0 0 24 24" />,
    },
  ],
  "FİZİKİ POS": [
    {
      title: "Fiziki POS",
      href: "physicalPOS",
      icon: <IconBank width={24} height={24} viewBox="0 0 24 24" />,
    },
  ],
  "Daha Fazlası": [
    {
      title: "Yardım ve Destek",
      href: "helpAndSupport",
      icon: <IconSupport width={24} height={24} viewBox="0 0 24 24" />,
    },
    {
      title: "Ayarlar",
      href: "",
      icon: <IconSetting width={24} height={24} viewBox="0 0 24 24" />,
    },
  ],
};

export const menuItems2: {
  [key: string]: MenuItem[];
} = {
  İŞLEMLER: [
    {
      title: "Ödeme Linkleri",
      href: "/dashboard/linkPayment",
      icon: <IconLink width={24} height={24} viewBox="0 0 24 24" />,
    },
    {
      title: "Raporlarım",
      href: "",
      icon: <IconClipboard width={24} height={24} viewBox="0 0 24 24" />,
    },
  ],
  "Daha Fazlası": [
    {
      title: "Yardım ve Destek",
      href: "/dashboard/helpAndSupport",
      icon: <IconSupport width={24} height={24} viewBox="0 0 24 24" />,
    },
    {
      title: "Ayarlar",
      href: "",
      icon: <IconSetting width={24} height={24} viewBox="0 0 24 24" />,
    },
  ],
};
