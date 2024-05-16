import { ReactElement, ReactNode } from "react"

export type MenuItem = {
    title:string,
    href:string,
    icon:ReactNode,
    isParent?:Boolean
}