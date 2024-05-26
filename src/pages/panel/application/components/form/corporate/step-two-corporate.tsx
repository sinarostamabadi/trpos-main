import { Button } from "../../../../../../components/button";
import { Input } from "../../../../../../components/input";

export const StepTwoCorporate = () => {
  return (
    <form className="pe-2 mt-3">
      <div className="flex flex-col gap-y-3 mb-3">
        <Input label="Unvan" />
        <div className="flex gap-x-3">
          <Input label="İl" />
          <Input label="İlçe" />
        </div>
        <Input label="Adres" />
        <div className="flex gap-x-3">
          <Input label="Bina No" />
          <Input label="İç Kapı No" />
        </div>
      </div>

      <Button variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
