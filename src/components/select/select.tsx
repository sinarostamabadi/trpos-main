import { Select } from "antd";
import { SelectProps } from "./select.types";
import { useState } from "react";

export const SelectInput = ({
  className,
  options,
  placeholder,
  register,
  error,
  touched,
  size = "middle",
}: SelectProps) => {
  const [value, setValue] = useState<string | number | undefined>(undefined);

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
      <Select
        className={"select"}
        options={options}
        placeholder={placeholder}
        onSelect={(value) => setValue(value)}
        size={size}
        variant="borderless"
        listHeight={150}
        {...register}
      />
    </div>
  );
};
