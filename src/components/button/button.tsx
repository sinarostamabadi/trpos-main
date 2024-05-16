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
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "",
  type = "button",
  isLink = false,
  isInTop,
  animatedIcon = false,
  children,
  className,
  isLight = false,
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
    { [`${shapeClasses[shape]}`]: shape },
    { "btn-light": isLight }
  );

  return (
    <button
      type={type}
      disabled={isDisabled}
      {...rest}
      className={classes}
      style={isInTop ? { fontFamily: "Rubik" } : { fontFamily: "inter" }}
    >
      {isLoading ? loadingText : children}
      {isLoading && <Loading />}
    </button>
  );
};
