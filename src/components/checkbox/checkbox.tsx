import classNames from "classnames"
import { CheckBoxProps } from "./checkbox.types"

export const CheckBox:React.FC<CheckBoxProps> = ({
    isDisable,
    className,
    register,
    children,
    id,
    error,
    ...rest
} : CheckBoxProps) => {

    const classes=classNames(
        "checkbox",
        className
    )

    return (
        <div className={classes}>
            <input id={id} type="checkbox" {...register} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}