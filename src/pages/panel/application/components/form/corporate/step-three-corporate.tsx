import { Button } from "../../../../../../components/button";
import { CheckBox } from "../../../../../../components/checkboxes";
import { Input } from "../../../../../../components/input";
import { PhoneInput } from "../../../../../../components/phoneInput";
import { SelectInput } from "../../../../../../components/select";

export const StepThreeCorporate = () => {
  return (
    <form className="pe-2 mt-3">
      <div className="flex flex-col gap-y-3 mb-3">
        <CheckBox
          id="Başvuran"
          label="Başvuran kişi ile yetkili kişi aynı ise tıklayınız."
          className="mb-4"
        />
        <div className="flex gap-x-3">
          <Input label="Yetkili Adı" />
          <Input label="Yetkili Soyadı" />
        </div>
        <Input label="Yetkili E-Posta" type="email" />
        <PhoneInput label="Yetkili Cep Numarası" />
        <Input label="Yetkili Kimlik Numarası" />
        <Input label="Yetkili Doğum Tarihi" type="date" />
        <SelectInput name="" placeholder="Meslek" />
      </div>

      <Button variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
