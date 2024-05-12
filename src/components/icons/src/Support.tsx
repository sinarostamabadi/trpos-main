import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21.6211C16.971 21.6211 21 17.5911 21 12.6211C21 7.65009 16.971 3.62109 12 3.62109C7.029 3.62109 3 7.65009 3 12.6211C3 17.5911 7.029 21.6211 12 21.6211Z" stroke-opacity=".4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.13 12.6202C16.13 14.9002 14.282 16.7482 12.002 16.7482C9.72201 16.7482 7.87305 14.9002 7.87305 12.6202C7.87305 10.3402 9.72201 8.49219 12.002 8.49219C14.282 8.49219 16.13 10.3402 16.13 12.6202Z" stroke-opacity=".4"/><path d="M9.08472 15.5352L5.63672 18.9832" stroke-opacity=".4"/><path d="M14.9199 15.5391L18.3659 18.9851" stroke-opacity=".4"/><path d="M5.63672 6.25781L9.08374 9.7048" stroke-opacity=".4"/><path d="M14.9199 9.70282L18.3649 6.25781" stroke-opacity=".4"/>
    </BaseIcon>
  );
}