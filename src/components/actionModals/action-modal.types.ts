import { BaseModalProps } from "../../types/modal.types";

export type ActionModalProps = BaseModalProps & {
  title?: string;
  subTitle?: string;
  confirmLabel: string;
  shouldForceSignout?: boolean;
  onSubmit?: () => void;
};
