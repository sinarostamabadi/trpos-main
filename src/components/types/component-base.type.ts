import { Size } from "./size.type"
import { Variant } from "./variant.type"

export type ComponentBase={
    isDisable?:boolean,
    className?:string,
    variant?:Variant,
    size?:Size
}