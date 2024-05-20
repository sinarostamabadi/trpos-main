import { BaseModalProps } from "../../types/modal.types";

export type ActionModalProps = BaseModalProps & {
  subTitle?: string;
  confirmLabel: string;
};
