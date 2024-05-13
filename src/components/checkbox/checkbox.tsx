import classNames from "classnames";
import { CheckBoxProps } from "./checkbox.types";

export const CheckBox: React.FC<CheckBoxProps> = ({
  isDisabled: isDisable,
  className,
  isChecked,
  register,
  label,
  linkLabel,
  id,
  error,
  touched,
  handleClick,
  ...rest
}: CheckBoxProps) => {
  const classes = classNames("checkbox", className);

  return (
    <div className={`${classes} flex`}>
      <input
        id={id}
        type="checkbox"
        hidden
        onClick={handleClick}
        checked={isChecked}
        {...register}
        {...rest}
      />
      <label
        className="checkbox_label lg:text-sm text-xs flex gap-x-3 select-none"
        htmlFor={id}
      >
        {isChecked ? (
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
            className={`font-semibold select-none ${
              isChecked ? "text-primary" : "text-success"
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
