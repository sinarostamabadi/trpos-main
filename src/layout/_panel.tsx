import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import logo from "../assets/images/logo.svg"
import { IconArrowDown, IconArrowLeft, IconBag, IconBank, IconClipboard, IconLink, IconNotification, IconSetting, IconSupport, IconUser, IconWebPage } from '../components/icons/icons';
import { Dropdown } from 'antd';
import user from "../assets/images/user.png"
import { useState } from 'react';
import { RiUserLine } from "react-icons/ri";

type MenuItem = Required<MenuProps>['items'][number];

const items1: MenuItem[] = [
  {
    key: " grp1",
    type:"group",
    label: "İŞLEMLER",
    style:{backgroundColor:"#FAFAFA"},
    children: [
      {
        key: 'g1',
        label: 'Ödeme Linkleri',
        icon:<IconLink width={24} height={24} viewBox='0 0 24 24' />
      },
      {
        key: 'g1',
        label: 'Raporlarım',
        icon:<IconClipboard width={24} height={24} viewBox='0 0 24 24' />,
        children:[
          {

          key:"g10",
          label: 'Raporlarım',
          icon:<IconClipboard width={24} height={24} viewBox='0 0 24 24' />,
        }
      ]
      },
    ],
  },
  {
    key: " grp3",
    type:"group",
    label: "Daha Fazlası",
    style:{backgroundColor:"#FAFAFA" , marginTop:"25px"},
    children: [
      {
        key: 'g1',
        label: 'Yardım ve Destek',
        icon:<IconSupport width={24} height={24} viewBox='0 0 24 24' />
      },
      {
        key: 'g1',
        label: 'Ayarlar',
        icon:<IconSetting width={24} height={24} viewBox='0 0 24 24' />
      },
    ],
  },
];

const items2: MenuItem[] = [
  {
    key: " grp1",
    type:"group",
    label: "SANAL POS",
    style:{backgroundColor:"#FAFAFA"},
    children: [
      {
        key: 'g1',
        label: 'Web Site Yönetimi',
        icon:<IconWebPage width={24} height={24} viewBox='0 0 24 24' />
      },
      {
        key: 'g1',
        label: 'Ödeme Linkleri',
        icon:<IconLink width={24} height={24} viewBox='0 0 24 24' />
      },
      {
        key: 'g1',
        label: 'Raporlarım',
        icon:<IconClipboard width={24} height={24} viewBox='0 0 24 24' />,
        children:[
          {

          key:"g10",
          label: 'Raporlarım',
          icon:<IconClipboard width={24} height={24} viewBox='0 0 24 24' />,
        }
      ]
      },
      {
        key: 'g1',
        label: 'Kullanıcı Yetkilendirme',
        icon:<IconUser width={24} height={24} viewBox='0 0 24 24' />
      },
    ],
  },
  {
    key: " grp2",
    type:"group",
    label: "FİZİKİ POS",
    style:{backgroundColor:"#FAFAFA" , marginTop:"25px"},
    children: [
      {
        key: 'g1',
        label: 'Fiziki POS',
        icon:<IconBank width={24} height={24} viewBox='0 0 24 24' />
      },
    ],
  },
  {
    key: " grp3",
    type:"group",
    label: "Daha Fazlası",
    style:{backgroundColor:"#FAFAFA" , marginTop:"25px"},
    children: [
      {
        key: 'g1',
        label: 'Yardım ve Destek',
        icon:<IconSupport width={24} height={24} viewBox='0 0 24 24' />
      },
      {
        key: 'g1',
        label: 'Ayarlar',
        icon:<IconSetting width={24} height={24} viewBox='0 0 24 24' />
      },
    ],
  },
];

export const PanelLayout = () => {

  const [menuNumber , setMenuNumber]=useState<1 | 2>(2);

  return (
    <section className="w-full h-screen grid grid-cols-[280px_1fr] bg-base-gray">
      <div className='w-full h-full grid grid-rows-[auto_auto_1fr] p-6 bg-base-gray border-r-2 border-actual-white'>
        <div className='flex justify-between items-center'>
          <img className='w-[140PX] h-[28PX]' src={logo} alt="logo" />
          <div className='flex justify-center items-center p-1 bg-actual-white rounded-full'>
            <IconArrowLeft width={16} height={16} viewBox='0 0 20 20' />
          </div>
        </div>
        <div className='mt-10'>
          <div className='w-full h-[55px] grid grid-cols-2 rounded-2.5xl bg-actual-white p-1'>
            <div onClick={() => setMenuNumber(1)} className={`flex items-center gap-1 text-base-content-40 p-2 rounded-2.5xl cursor-pointer ${menuNumber===1 && "bg-base-content-3 !text-base-content"}`}>
              <RiUserLine />
              <p className='text-xs font-semibold'>Bireysel</p>
            </div>
            <div onClick={() => setMenuNumber(2)} className={`flex items-center gap-1 text-base-content-40 p-2 rounded-2.5xl cursor-pointer ${menuNumber===2 && "bg-base-content-3 !text-base-content"}`}>
              <IconBag width={20} height={20} viewBox='0 0 24 24' />
              <p className='text-xs font-semibold'>Kurumsal</p>
            </div>
          </div>          
        </div>
        <div className='w-full mt-10'>
          <Menu
            style={{ width:"100%" , border:"none" , backgroundColor:"#FAFAFA" , color:"#18181C66"}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={menuNumber === 1 ? items1 : items2}
          />
        </div>
      </div>
      <div>
        <div className='container w-full h-full grid grid-rows-[80px_1fr]'>
          <div className='w-full flex justify-between items-center p-4 border-b-2 border-actual-white'>
            <div className='flex gap-20 items-center'>
              <div className='flex flex-col gap-1'>
                <p className='text-base-content font-semibold'>Raven Soft</p>
                <div className='flex items-center gap-1'>
                  <div className='w-1 h-1 bg-success rounded-full'>

                  </div>
                  <p className='text-sm text-base-content-40'>Kurumsal</p>
                </div>
              </div>
              <div>
              <Dropdown menu={{items:items1}}>
                <div className='flex items-center gap-2 px-4 py-3 bg-base-content-2 rounded-2.5xl text-sm'>
                  <p>
                    Değiştir
                  </p>
                  <IconArrowDown width={20} height={20} viewBox='0 0 20 20' />
                </div>
              </Dropdown>
              </div>
            </div>
            <div className='flex gap-20'>
              <div className='px-4 py-[14px] border rounded-2.5xl'>
                <IconNotification width={17} height={20} viewBox='0 0 24 24' fill='black' />
              </div>
              <div className='flex items-center gap-14 px-2 py-1 bg-actual-white rounded-2xl'>
                <div className='flex items-center gap-2'>
                  <img src={user} className='w-[30px] h-[30px]' alt="" />
                  <div className='flex flex-col gap-[1px]'>
                    <p className='text-xs text-base-content-40'>Üye</p>
                    <p className='text-xs text-base-content font-semibold'>Bestami Çoban</p>
                  </div>
                </div>
                <div>
                  <IconArrowDown width={20} height={20} viewBox='0 0 20 20' className='text-base-content-40' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PanelLayout;
