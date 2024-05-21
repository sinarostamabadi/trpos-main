import { Modal } from "../../../../components/modal";
import { SettingModalsProps } from "./setting-modals.types";
import TermsData from "../../../../data/trpos_rules.json";

export const Terms: React.FC<SettingModalsProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      title="Trpos Kullanıcı Sözleşmesi"
      subTitle="Son Düzenleme Tarihi: 28 Nisan 2024, Pazar"
      state={state}
      onCloseModal={onCloseModal}
      small
    >
      <div>
        <p className="rule__title">{TermsData.rule_1.title}</p>
        <span className="rule__text">{TermsData.rule_1.content}</span>
      </div>
      <div>
        <p className="rule__title">{TermsData.rule_2.title}</p>
        <span className="rule__text">{TermsData.rule_2.content}</span>
      </div>
      <div>
        <p className="rule__title">{TermsData.rule_3.title}</p>
        <span className="rule__text">{TermsData.rule_3.content}</span>
      </div>
    </Modal>
  );
};
