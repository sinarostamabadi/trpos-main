import classNames from "classnames";
import { LoadingProps } from "./loading.types";
import { sizeClasses } from "../types/size-classes";

export const Loading: React.FC<LoadingProps> = ({
  className,
  size = "normal",
  variant,
  type = "spinner",
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`loading-${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant }
  );

  return <span className={classes}></span>;
};
