import { Dispatch, ReactNode, SetStateAction } from "react";

export type ModalProps = {
  title: string;
  state: boolean;
  onCloseModal?: () => void;
  children?: ReactNode;
  small?: boolean;
  setState:Dispatch<SetStateAction<boolean>>;
  subTitle?:string
};
