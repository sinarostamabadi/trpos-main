import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
// import { dataState } from "../types/login.types";

type Props = {
  // data: dataState;
};

const CheckOTP: React.FC<Props> = ({}: // data
Props) => {
  return (
    <div className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm">
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          SMS Kodunu Doğrula
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Sonu 6707 ile biten numarana kod gönderdik. Kimliğinden emin
          olmalıyız.
        </p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center mt-6">
        <Input label="Doğrulama Kodu" type="text" className="w-full" />
        <div className="mt-6 w-full">
          <Button variant="primary" shape="full">
            Devam Et
          </Button>
        </div>
      </div>

      <p className="text-sm flex gap-x-2 justify-center mt-6">
        Kod Gelmediyse
        <span className="text-success font-semibold cursor-pointer">
          Tekrar Kod Gönder
        </span>
      </p>
    </div>
  );
};

export default CheckOTP;
