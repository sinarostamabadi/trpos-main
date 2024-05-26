import { StepperModal } from "../../../../../components/stepperModal";
import { CreateModalProps } from "../create.types";

export const CreateCorporate: React.FC<CreateModalProps> = ({
  state,
  children,
  current,
  title,
  subTitle,
  hasCloseButton,
  onCloseModal,
}) => {
  return (
    <StepperModal
      state={state}
      title={title}
      subTitle={subTitle}
      onCloseModal={onCloseModal}
      hasCloseButton={hasCloseButton}
      current={current}
      titlesList={[
        {
          title: "Kimlik",
        },
        {
          title: "Kurumsal Bilgiler",
        },
        {
          title: "Yetkili Bilgiler",
        },
        {
          title: "Evraklar",
        },
        {
          title: "Sonuç",
        },
      ]}
    >
      {children}
    </StepperModal>
  );
};
