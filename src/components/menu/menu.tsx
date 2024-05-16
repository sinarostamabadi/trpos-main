import { useLocation } from "react-router-dom"
import { menuItems1 , menuItems2 } from "../../data/menu-items"
import { IconBank, IconClipboard, IconLink, IconSetting, IconSupport, IconUser, IconWebPage } from "../icons/icons"
import { MenuItem } from "./components/menu-item"
import { MenuProps } from "./menu.types"

export const Menu:React.FC<MenuProps> = ({
    menuNumber
} : MenuProps) => {
    const pathName=useLocation().pathname;
    if(menuNumber===1) {
        return (
            <div>
                <div>
                    <p className="text-sm text-base-content-40">İŞLEMLER</p>
                    <ul className="p-1">
                        {menuItems2["İŞLEMLER"].map((item) => {
                            return (
                                <MenuItem title={item.title} href={item.href} icon={item.icon} isActive={pathName===item.href} isParent={item.isParent} />
                            )
                        })}
                    </ul>
                </div>
    
                <div className="mt-6">
                    <p className="text-sm text-base-content-40">Daha Fazlası</p>
                    <ul className="p-1">
                        {menuItems2["Daha Fazlası"].map((item) => {
                            return (
                                <MenuItem title={item.title} href={item.href} icon={item.icon} isActive={pathName===item.href} isParent={item.isParent} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    return (
            <div>
                <div>
                    <p className="text-sm text-base-content-40">SANAL POS</p>
                    <ul className="p-1">
                        {menuItems1["SANAL POS"].map((item) => {
                            return (
                                <MenuItem title={item.title} href={item.href} icon={item.icon} isActive={pathName===item.href} isParent={item.isParent} />
                            )
                        })}
                    </ul>
                </div>
    
                <div className="mt-6">
                    <p className="text-sm text-base-content-40">FİZİKİ POS</p>
                    <ul className="p-1">
                        {menuItems1["FİZİKİ POS"].map((item) => {
                            return (
                                <MenuItem title={item.title} href={item.href} icon={item.icon} isActive={pathName===item.href} isParent={item.isParent} />
                            )
                        })}
                    </ul>
                </div>
    
                <div className="mt-6">
                    <p className="text-sm text-base-content-40">Daha Fazlası</p>
                    <ul className="p-1">
                        {menuItems1["Daha Fazlası"].map((item) => {
                            return (
                                <MenuItem title={item.title} href={item.href} icon={item.icon} isActive={pathName===item.href} isParent={item.isParent} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
}