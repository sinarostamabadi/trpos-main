import { useState } from "react";
import { PhoneInputType } from "./phone-input.types";
import { IconCheckCircle, IconRemoveCircle } from "../icons/icons";
import { Popover } from "antd";

export const PhoneInput: React.FC<PhoneInputType> = ({
  label,
  isDisabled,
  className,
  isError,
  register,
  error,
  touched,
  ...rest
}: PhoneInputType) => {
  const [value, setValue] = useState("+90");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Ensure the input always starts with '+' and '+' cannot be deleted
    if (!inputValue.startsWith("+")) {
      setValue("+" + inputValue.replace(/\+/g, ""));
    } else {
      setValue(inputValue);
    }
  };

  return (
    <div className="w-full">
      <div className={`form__group flex items-center ${className} `}>
        <input
          type="text"
          id={label}
          className={`form__field`}
          disabled={isDisabled}
          placeholder=""
          defaultValue={value}
          onInput={handleChange}
          // Prevent user from deleting '+' using backspace or delete key
          onKeyDown={(e) => {
            if (
              (e.key === "Backspace" || e.key === "Delete") &&
              value === "+"
            ) {
              e.preventDefault();
            }
          }}
          {...register}
          {...rest}
        />
        <label htmlFor={label} className="form__label">
          {label}
        </label>
        <div>
          {touched && error ? (
            <Popover content={error}>
              <IconRemoveCircle className="w-6 mt-1 text-error" />
            </Popover>
          ) : (
            touched && <IconCheckCircle className="w-6 mt-1 text-success" />
          )}
        </div>
      </div>
    </div>
  );
};
