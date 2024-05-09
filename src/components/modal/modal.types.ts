import { ReactNode } from "react";

export type ModalProps = {
  title: string;
  state?: boolean;
  onCloseModal?: () => void;
  children?: ReactNode;
  small?: boolean;
};
