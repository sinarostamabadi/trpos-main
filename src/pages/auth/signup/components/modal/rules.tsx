import { Button } from "../../../../../components/button";
import { Modal } from "../../../../../components/modal";

type Props = {
  state: boolean;
  content: { title: string; text: string };
  handleRuleAccept?: () => void;
  handleCloseModal?: () => void;
};

export const RuleModal: React.FC<Props> = ({
  state,
  content,
  handleRuleAccept,
  handleCloseModal,
}) => {
  const handleClick = () => {
    handleRuleAccept && handleRuleAccept();
  };

  return (
    <Modal
      state={state}
      onCloseModal={handleCloseModal}
      title="Trpos Kullanıcı Sözleşmesi"
      subTitle="Son Düzenleme Tarihi: 28 Nisan 2024, Pazar"
    >
      <div className="lg:h-[400px] h-[300px] overflow-y-scroll">
        <p className="rule__title">{content?.title}</p>
        <span className="rule__text">{content?.text}</span>
      </div>
      <Button
        onClick={handleClick}
        variant="primary"
        shape={"full"}
        className="mt-3"
      >
        Kabul Et ve Kapat
      </Button>
    </Modal>
  );
};
