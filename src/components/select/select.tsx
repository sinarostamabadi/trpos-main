import { useState } from "react";
import { Select } from "antd";
import { SelectProps } from "./select.types";
import { Controller } from "react-hook-form";

export const SelectInput = ({
  className,
  options,
  placeholder,
  register,
  error,
  touched,
  size = "middle",
  isSimple=false,
  name,
  control,
  label,
  disable=false,
  isLoading=false,
}: SelectProps) => {
  const [value, setValue] = useState<string | number | undefined>(undefined);

  if(isSimple) {
    return (
      <div className={`w-full flex flex-col gap-2 ${className}`}>
        <label className="text-sm text-base-content-40" htmlFor={label}>
          {label}
        </label>
        <Select
        options={options}
        onSelect={(value) => setValue(value)}
        size={size}
        className="h-full border !outline-none !rounded-2.5xl"
        variant="borderless"
        listHeight={150}
        disabled={disable}
        {...register}
        loading={isLoading}
      />
      </div>
    )
  }
  return (
    <div
      className={`select_field ${value ? "value_selected" : ""} ${
        touched && error && "error"
      } ${className}`}
    >
      {
        <div className={`placeholder_top ${touched && error && "error"}`}>
          {placeholder}
        </div>
      }
      <Controller
          control={control}
          name={name!}
          render={({ field }) => (
            <Select
              {...field}
              className={"select"}
              options={options}
              placeholder={placeholder}
              onSelect={(value) => setValue(value)}
              size={size}
              variant="borderless"
              listHeight={150}
              loading={isLoading}
              disabled={isLoading || disable}
            />
          )}
        />
    </div>
  );
};
