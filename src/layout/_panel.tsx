import type { MenuProps } from "antd";
import {
  IconArrowDown,
  IconArrowLeft,
  IconBag,
  IconNotification,
  IconPieChart,
} from "../components/icons/icons";
import { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../components/menu/menu";
import { MenuItem } from "../components/menu/components/menu-item";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.png";

type MenuItem = Required<MenuProps>["items"][number];

const PanelLayout = () => {
  const [menuNumber, setMenuNumber] = useState<1 | 2>(2);
  const [isToggled, setIsToggled] = useState(false);

  const { pathname } = useLocation();

  return (
    <section className="layout w-full min-h-screen grid grid-cols-[280px_1fr] bg-base-gray">
      <div className="w-full h-full grid grid-rows-[auto_auto_1fr] p-6 bg-base-gray border-r-2 border-actual-white">
        <div className="flex justify-between items-center">
          <img className="w-[140PX] h-[28PX]" src={logo} alt="logo" />
          <div className="flex justify-center items-center p-1 bg-actual-white rounded-full">
            <IconArrowLeft width={16} height={16} viewBox="0 0 20 20" />
          </div>
        </div>
        <div className="mt-10">
          <div
            className="w-full relative h-[55px] grid grid-cols-2 rounded-2.5xl bg-actual-white p-1"
            onClick={() => setIsToggled(!isToggled)}
          >
            <div
              onClick={() => setMenuNumber(1)}
              className={`flex items-center gap-1 text-base-content-40 p-2 rounded-2.5xl cursor-pointer ${
                menuNumber === 1 &&
                "bg-base-content-3 transition-colors duration-300 !text-base-content"
              }`}
            >
              <RiUserLine />
              <p className="text-xs font-semibold">Bireysel</p>
            </div>
            <div
              onClick={() => setMenuNumber(2)}
              className={`flex items-center gap-1 text-base-content-40 p-2 rounded-2.5xl cursor-pointer ${
                menuNumber === 2 &&
                "bg-base-content-3 transition-colors duration-300 !text-base-content"
              }`}
            >
              <IconBag width={20} height={20} viewBox="0 0 24 24" />
              <p className="text-xs font-semibold">Kurumsal</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="mb-10">
            <MenuItem
              title="Panel"
              href="/dashboard"
              iconActive={
                <IconPieChart
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="text-black"
                />
              }
              iconDeactive={
                <IconPieChart width={24} height={24} viewBox="0 0 24 24" />
              }
              isActive={pathname === "/dashboard"}
            />
          </div>
          <Menu menuNumber={menuNumber} />
        </div>
      </div>
      <div>
        <div className="w-full h-full grid grid-rows-[100px_auto_1fr]">
          <div className="w-full flex items-center border-b-2 border-actual-white">
            <div className="container w-full flex justify-between items-center p-4">
              <div className="flex gap-10 items-center">
                <div className="flex flex-col gap-[1px]">
                  <p className="text-[15px] text-base-content">
                    {pathname.includes("/dashboard/helpAndSupport")
                      ? "Yardım ve Destek"
                      : pathname.includes("/dashboard/settings")
                      ? "Ayarlar"
                      : "Raven Soft"}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-[5px] h-[5px] bg-success rounded-full"></div>
                    <p className="text-sm text-base-content-40">
                      {pathname.includes("/dashboard/helpAndSupport") ||
                      pathname.includes("/dashboard/settings")
                        ? "Trpos"
                        : "Kurumsal"}
                    </p>
                  </div>
                </div>
                {!pathname.includes("/dashboard/helpAndSupport") && (
                  <div className="flex items-center cursor-pointer gap-2 px-4 py-3 bg-base-content-2 rounded-2.5xl text-[12px]">
                    <p>Değiştir</p>
                    <IconArrowDown width={20} height={20} viewBox="0 0 20 20" />
                  </div>
                )}
              </div>

              <div className="flex gap-10">
                <div className="px-[14px] py-[12px] border rounded-[18px]">
                  <IconNotification
                    width={17}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="black"
                  />
                </div>
                <div className="flex items-center gap-14 px-2 py-1 bg-actual-white rounded-2xl">
                  <div className="flex items-center gap-2">
                    <img src={user} className="w-[30px] h-[30px]" alt="" />
                    <div className="flex flex-col gap-[1px]">
                      <p className="text-xs text-base-content-40">Üye</p>
                      <p className="text-xs text-base-content font-medium">
                        Bestami Çoban
                      </p>
                    </div>
                  </div>
                  <div>
                    <IconArrowDown
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      className="text-base-content-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default PanelLayout;
