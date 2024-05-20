import { BaseModalProps } from "../../types/modal.types";

export type DeleteModalProps = BaseModalProps & {
  subTitle?: string;
  confirmLabel: string;
};
