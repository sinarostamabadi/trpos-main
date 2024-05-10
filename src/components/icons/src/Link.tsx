import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.38475 10.4727L5.23775 11.6197C2.92075 13.9367 2.92075 17.7137 5.23775 20.0307C7.54675 22.3397 11.3317 22.3477 13.6487 20.0307L14.7957 18.8837" stroke-opacity=".4"/><path d="M18.6152 15.0662L19.7623 13.9192C22.0792 11.6022 22.0792 7.82519 19.7623 5.50819C17.4533 3.19919 13.6683 3.19119 11.3513 5.50819L10.2043 6.6552" stroke-opacity=".4"/><path d="M15.1367 10.2227L9.9043 15.455" stroke-opacity=".4"/>
    </BaseIcon>
  );
}