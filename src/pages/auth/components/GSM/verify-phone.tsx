import { useEffect, useState } from "react";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { useForm } from "react-hook-form";
import { VerifyCode } from "../../../../types/verify-code.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  resendCode,
  verifyCode,
} from "../../../../redux/actions/auth/verify-code";
import * as yup from "yup";
import { BeatLoader } from "react-spinners";

type ActionType = {
  actionType: "signup" | "login" | "forgot-password" | "change-phone";
};

export const VerifyPhone: React.FC<ActionType> = ({ actionType }) => {
  const [userPhone, setUserPhone] = useState();

  const { info: signupInfo } = useAppSelector((state) => state.signupSlice);
  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );
  const { loading: resendCodeLoading } = useAppSelector(
    (state) => state.resendCodeSlice
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const x = signupInfo?.phoneNumber?.slice(-4);
    setUserPhone(x);
  }, [signupInfo]);

  const verifyCodeSchema = yup.object().shape({
    code: yup.string().required().min(7),
    version: yup.string().required(),
    methodProviderName: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<VerifyCode>({
    defaultValues: { version: "1", methodProviderName: "confirmphoneNumber" },
    resolver: yupResolver(verifyCodeSchema),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const onSubmit = (values: VerifyCode) => {
    const numericCode = values.code.replace(/[^\d]/g, "");
    const dataToSend = { ...values, code: numericCode };
    dispatch(verifyCode(dataToSend, actionType, "GSM"));
  };
  return (
    <div className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="xl:text-2xl text-base-content font-semibold">
            SMS Kodunu Doğrula
          </h1>
          <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
            Sonu {userPhone} ile biten numarana kod gönderdik. Kimliğinden emin
            olmalıyız.
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mt-6">
          <Input
            label="Doğrulama Kodu"
            register={{ ...register("code") }}
            touched={touchedFields.code}
            error={errors.code?.message}
            isCode
          />
          <div className="mt-6 w-full">
            <Button
              variant="primary"
              shape="full"
              type="submit"
              disabled={Object.keys(errors).length > 0 ? true : false}
              isLoading={isButtonLoading}
            >
              Devam Et
            </Button>
          </div>
        </div>
      </form>

      <p className="text-sm flex gap-x-2 justify-center mt-6">
        Kod Gelmediyse
        {resendCodeLoading ? (
          <BeatLoader size={7} color="#36d7b7" className="mt-1" />
        ) : (
          <span
            className="text-success font-semibold flex-shrink cursor-pointer"
            onClick={() => dispatch(resendCode())}
          >
            Tekrar Kod Gönder
          </span>
        )}
      </p>
    </div>
  );
};
