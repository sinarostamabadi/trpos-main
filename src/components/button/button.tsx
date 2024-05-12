import { Loading } from "../loading";
import { sizeClasses } from "../types/size-classes";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled: isDisable = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست...",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-70": isLoading },
    { [`btn-${variant}`]: variant },
    { [`btn-${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );

  return (
    <button type={type} disabled={isDisable} {...rest} className={classes}>
      {isLoading ? loadingText : children}
      {isLoading && <Loading />}
    </button>
  );
};
