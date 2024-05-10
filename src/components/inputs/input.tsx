import { InputType } from "./input.types";
import { useState } from "react";
import { InputErrorComponent } from "../inputError";
import {
  IconCheckCircle,
  IconEye,
  IconHide,
  IconRemoveCircle,
} from "../icons/icons";

export const Input: React.FC<InputType> = ({
  label,
  isDisable,
  type = "text",
  className,
  isPassword,
  isError,
  register,
  error,
  touched,
  ...rest
}: InputType) => {
  const [inputType, setInputType] = useState<typeof type>(type);

  return (
    <>
      <div
        className={`form__group flex ${className} ${
          error && type === "password" && "border-error"
        }`}
      >
        <input
          type={inputType}
          id={label}
          className={`form__field`}
          disabled={isDisable}
          placeholder=""
          {...register}
          {...rest}
        />
        <label
          htmlFor={label}
          className={`form__label ${
            type === "password" && error && "text-error"
          }`}
        >
          {label}
        </label>
        <div>
          {isPassword ? (
            inputType === "text" ? (
              <IconEye
                className={`cursor-pointer w-6 mt-2 ${error && "text-error"}`}
                onClick={() => setInputType("password")}
              />
            ) : (
              <IconHide
                className={`cursor-pointer w-6 mt-2 ${error && "text-error"}`}
                onClick={() => setInputType("text")}
              />
            )
          ) : touched ? (
            error ? (
              <IconRemoveCircle className="w-6 mt-2 text-error" />
            ) : (
              <IconCheckCircle className="w-6 mt-2 text-success" />
            )
          ) : null}
        </div>
      </div>
      <InputErrorComponent />
    </>
  );
};
