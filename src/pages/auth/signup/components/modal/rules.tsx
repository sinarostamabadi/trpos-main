import { Button } from "../../../../../components/button";
import { Modal } from "../../../../../components/modal";
import Data from "../../../../../data/trpos_rules.json";

type Props = {
  handleRuleAccept?: () => void;
  handleCloseModal?: () => void;
  state: boolean;
};

export const RuleModal: React.FC<Props> = ({
  handleRuleAccept,
  handleCloseModal,
  state,
}) => {
  const handleClick = () => {
    handleRuleAccept && handleRuleAccept();
  };

  return (
    <Modal
      state={state}
      onCloseModal={handleCloseModal}
      title="Trpos Kullanıcı Sözleşmesi"
    >
      <div className="lg:h-[500px] h-[400px]">
        <span className="opacity-60 font-medium">
          Son Düzenleme Tarihi: 28 Nisan 2024, Pazar
        </span>
        <div className="lg:h-[400px] h-[300px] overflow-y-scroll">
          {Data.rules.map((rule, index) => (
            <div key={`rule-${index}`}>
              <p className="rule__title">{rule.title}</p>
              <span className="rule__text">{rule.context}</span>
            </div>
          ))}
        </div>
        <Button
          onClick={handleClick}
          variant="primary"
          shape={"full"}
          className="mt-3"
        >
          Kabul Et ve Kapat
        </Button>
      </div>
    </Modal>
  );
};
