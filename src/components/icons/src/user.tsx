import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.44141 19.9996C6.44141 17.891 8.10505 15.2656 12.9002 15.2656C17.6944 15.2656 19.358 17.8719 19.358 19.9815" stroke-opacity=".4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0258 8.12567C17.0258 10.4043 15.1788 12.2513 12.9001 12.2513C10.6224 12.2513 8.77539 10.4043 8.77539 8.12567C8.77539 5.847 10.6224 4 12.9001 4C15.1788 4 17.0258 5.847 17.0258 8.12567Z" stroke-opacity=".4"/>
    </BaseIcon>
  );
}