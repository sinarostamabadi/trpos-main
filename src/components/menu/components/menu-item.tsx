import { Link, useLocation } from "react-router-dom";
import { MenuItemProps } from "./menu-item.type";
import { IconArrowDown } from "../../icons/icons";
import { useState } from "react";

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  href,
  iconActive,
  iconDeactive,
  isActive = false,
  isParent = false,
  isToggled,
  children,
}) => {
  const [isOpen , setIsOpen]=useState<boolean>(false);
  const pathName = useLocation().pathname;
  return (
    
    <>
      <li
      onClick={() => {
        if(children) {
          setIsOpen(!isOpen);
        }
      }}
        className={`flex items-center gap-2 py-2 my-3 cursor-pointer select-none ${
          isActive ? "text-base-content" : "text-base-content-40"
        }`}
      >
        {isActive && (
          <div className="h-9 w-[6px] absolute left-0 rounded-r-3xl bg-base-content"></div>
        )}

        <Link to={href!} className={`flex gap-x-2 ${children && "pointer-events-none"}`}>
          {iconActive && isActive ? iconActive : iconDeactive}
          {isToggled && title}
        </Link>

        {isToggled && isParent && (
          isOpen ?
          <IconArrowDown
            width={20}
            height={20}
            viewBox="0 0 20 20"
            className="ml-auto rotate-180 mb-1"
          /> :
          <IconArrowDown
            width={20}
            height={20}
            viewBox="0 0 20 20"
            className="ml-auto"
          />
        )}
      </li>
      {
        children && isOpen &&
        <div className="flex flex-col gap-6 border-b pb-4 pl-1">
          {
            children?.map((item) => {
              return (
                <Link to={item.href!} className={`${pathName===item.href ? "text-base-content flex gap-4 items-center" : "text-base-content-40 pl-7"}`}>
                  {
                    pathName===item.href &&
                    <div className="w-[14px] h-1 bg-base-content rounded-2.5xl">
                    
                    </div>
                  }
                  {item.title}
                </Link>
              )
            })
          }
        </div>
      }
    </>
  );
};
