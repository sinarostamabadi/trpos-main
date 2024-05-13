import { Select } from "antd";
import { SelectProps } from "./select.types";

export const SelectInput = ({
  className,
  options,
  placeholder,
  isError,
  register,
  // error,
  // touched,
}: SelectProps) => {
  return (
    <div className={`select_field ${className}`}>
      <Select
        className={"select"}
        options={options}
        placeholder={placeholder}
        size="large"
        status={isError ? "error" : ""}
        variant="borderless"
        listHeight={150}
        {...register}
      />
    </div>
  );
};
