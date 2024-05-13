import classNames from "classnames";
import { CheckBoxProps } from "./checkbox.types";
import { useEffect, useState } from "react";

export const CheckBox: React.FC<CheckBoxProps> = ({
  isDisabled: isDisable,
  className,
  isChecked = false,
  register,
  label,
  linkLabel,
  id,
  error,
  touched,
  handleClick,
  ...rest
}: CheckBoxProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const classes = classNames("checkbox", className);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <div className={`${classes} flex`}>
      <input
        id={id}
        type="checkbox"
        hidden
        onClick={(e: any) => setChecked(e.target.checked)}
        checked={checked}
        {...register}
        {...rest}
      />
      <label
        className="checkbox_label lg:text-sm text-xs flex gap-x-2 select-none"
        htmlFor={id}
      >
        {checked ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="10" fill="#22B789" />
            <path
              d="M13.5 7.59375L8.6875 12.4062L6.5 10.2188"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              rx="9.5"
              stroke="#18181C"
              strokeOpacity="0.1"
            />
            <path
              d="M13.5 7.59375L8.6875 12.4062L6.5 10.2188"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        <p>
          <span
            onClick={handleClick}
            className={`font-semibold cursor-pointer select-none ${
              checked ? "text-primary" : "text-success"
            }`}
          >
            {linkLabel}
          </span>
          <span>{label}</span>
        </p>
      </label>
    </div>
  );
};
