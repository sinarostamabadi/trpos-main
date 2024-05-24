import { Button } from "../../../../../../components/button";
import { Input } from "../../../../../../components/input";

export const StepOneCorporate = () => {
  return (
    <form className="pe-2">
      <Input label="TCKN - Vergi No" className="my-4" />

      <Button variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
