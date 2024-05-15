import { InputType } from "./input.types";
import { useState } from "react";
import { InputErrorComponent } from "../inputError";
import {
  IconCheckCircle,
  IconEye,
  IconHide,
  IconRemoveCircle,
} from "../icons/icons";
import { Popover } from "antd";

export const Input: React.FC<InputType> = ({
  label,
  isDisabled: isDisable,
  type = "text",
  className,
  isPassword,
  isPhoneOrEmail,
  isError,
  register,
  error,
  touched,
  isSimple = false,
  ...rest
}: InputType) => {
  const [inputType, setInputType] = useState<typeof type>(type);

  const errorMessageSplitter = (message: string) => {
    return (
      <div className="flex flex-col">
        <span className="">{message.split("...")[0] + "..."}</span>
        <span className="">{message.split("...")[1]}</span>
      </div>
    );
  };
  if (isSimple) {
    return (
      <div className="w-full flex flex-col gap-2">
        <label className="text-sm text-base-content-40" htmlFor={label}>
          {label}
        </label>
        <input
          type={inputType != "email" ? inputType : "text"}
          id={label}
          className="h-14 border outline-none px-2 rounded-2.5xl"
          disabled={isDisable}
          placeholder=""
          {...register}
          {...rest}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className={`form__group flex items-center ${className} ${
          error && type === "password" && touched && "border-error"
        }`}
      >
        <input
          type={inputType != "email" ? inputType : "text"}
          maxLength={isPassword && 6}
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
            type === "password" && error && touched && "red__placeholder"
          }`}
        >
          {label}
        </label>
        <div>
          {isPassword ? (
            inputType === "text" ? (
              <IconEye
                className={`cursor-pointer w-6 mt-1 ${
                  error && touched && "text-error"
                }`}
                onClick={() => setInputType("password")}
              />
            ) : (
              <IconHide
                className={`cursor-pointer w-6 mt-1 ${
                  error && touched && "text-error"
                }`}
                onClick={() => setInputType("text")}
              />
            )
          ) : touched ? (
            error ? (
              isPhoneOrEmail &&
              error ==
                "Telefon formatı: +901234567... E-posta Formatı: kullanıcı@example.com" ? (
                <Popover
                  content={errorMessageSplitter(error)}
                  title="E-posta/Telefon geçersiz."
                >
                  <IconRemoveCircle className="w-6 mt-1 text-error" />
                </Popover>
              ) : (
                <IconRemoveCircle className="w-6 mt-1 text-error" />
              )
            ) : (
              <IconCheckCircle className="w-6 mt-1 text-success" />
            )
          ) : null}
        </div>
      </div>
      {isPassword && touched && <InputErrorComponent text={error} />}
    </div>
  );
};
