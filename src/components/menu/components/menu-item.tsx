import { Link } from "react-router-dom"
import { MenuItemProps } from "./menu-item.type"
import { IconArrowDown } from "../../icons/icons"


export const MenuItem:React.FC<MenuItemProps> = ({
    title,
    href,
    icon,
    isActive=false,
    isParent=false
}) => {
    return (
        <li className={`flex items-center gap-2 py-2 my-3 cursor-pointer ${isActive ? "text-base-content" : "text-base-content-40"}`}>
            {isActive &&
            <div className="h-9 w-[6px] absolute left-0 -translate-y-[6px] rounded-r-3xl bg-base-content">

            </div>
            }
            {icon}
            <Link to={href}>
                {title}
            </Link>
            {isParent &&
            <IconArrowDown width={20} height={20} viewBox="0 0 20 20" className="ml-auto" />
            }
        </li>
    )
}