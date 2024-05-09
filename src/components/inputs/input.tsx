import { InputType } from "./input.types"
import { useState } from "react"
import { InputErrorComponent } from "../inputError"
import { IconCheckCircle, IconEye, IconHide, IconRemoveCircle } from "../icons/icons";

export const Input:React.FC<InputType> = ({
    label,
    isDisable,
    type="text",
    className,
    isPassword,
    isError,
    register,
    error,
    touched,
    ...rest
} : InputType) => {
    const [inputType , setInputType]=useState<typeof type>(type);

    return (
        <>
            <div className={`form__group mt-4 flex items-center ${error && "border-error"}`}>
                <input type={inputType} id={label} className="form__field" placeholder=" " disabled={isDisable} {...register} />
                <label htmlFor={label} className="form__label">{label}</label>
                <div>
                    {
                        isPassword ?
                        inputType==="text" ?
                        <IconEye className="cursor-pointer w-6" onClick={() => setInputType("password")} /> : <IconHide className="cursor-pointer w-6" onClick={() => setInputType("text")} /> :
                        touched ?
                        error ?
                        <IconRemoveCircle className="w-6 text-error" /> :
                        <IconCheckCircle className="w-6 text-success" /> :
                        null
                    }
                </div>
            </div>
            <InputErrorComponent />
        </>
    )
}