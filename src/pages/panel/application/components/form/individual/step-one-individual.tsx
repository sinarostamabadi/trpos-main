import { Button } from "../../../../../../components/button";
import { CheckBox } from "../../../../../../components/checkboxes";
import { Divider } from "../../../../../../components/divider";
import { Input } from "../../../../../../components/input";
import { SelectInput } from "../../../../../../components/select";
import InstaLogo from "../../../../../../assets/images/image 8.png";

export const StepOneIndividual = () => {
  return (
    <form className="pe-2">
      <Divider text="Genel Bilgiler" />
      <div className="flex flex-col gap-y-3">
        <Input label="Adı - Soyadı" />
        <Input label="TCKN" />
        <Input label="Doğum Tarihi" type="date" />
        <Input label="Adresiniz" />
        <Input label="Hakediş IBAN No" />
      </div>

      <Divider text="Diğer Bilgiler" />
      <div className="flex flex-col gap-y-3">
        <SelectInput
          placeholder="Satış Yaptığınız Platform"
          options={[
            {
              value: 1,
              label: (
                <span className="flex gap-x-2">
                  <img src={InstaLogo} width={20} />
                  Instagram
                </span>
              ),
            },
          ]}
        />
        <Input label="Satış Yaptığınız Hesabın URL’si" />
        <CheckBox id="other-info" label="Bilgilerin doğruluğunu onaylıyorum." />
      </div>
      <Button variant="primary" shape="full" className="my-3">
        Onaya Gönder
      </Button>
    </form>
  );
};
