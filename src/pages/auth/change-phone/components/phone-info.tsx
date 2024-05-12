import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { changePhoneInputs } from "../change-phone.types";
import * as yup from "yup";

export const PhoneInfo = () => {
  const registerSchema = yup.object().shape({
    customerNo: yup.string().required(),
    lang: yup.string().required(),
    phoneCountry: yup.string(),
    phoneNumber: yup.string(),
    ip: yup.string().required(),
    currentPhoneNumber: yup.string(),
    currentPhoneCountry: yup.string(),
    email: yup.string(),
    password: yup.string().required("rrr"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<changePhoneInputs>({
    defaultValues: {
      customerNo: "100",
      lang: "tr",
      phoneCountry: "",
      phoneNumber: "",
      ip: "1.1.1.1",
      currentPhoneNumber: "",
      currentPhoneCountry: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<changePhoneInputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] sm:min-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Telefon numaramı değiştir.
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Telefon numaranızı sıfırlayın
        </p>
      </div>
      <div className="mt-6">
        <div className="lg:flex gap-x-3 justify-between">
          <Input
            label="Mevcut Telefon Numaranız"
            register={{ ...register("currentPhoneNumber") }}
          />
          <Input
            label="Yeni Telefon Numaranız"
            register={{ ...register("phoneNumber") }}
            className="mt-4 lg:mt-0"
          />
        </div>
        <Input
          type="email"
          label="E-Posta Adresiniz"
          className="mt-4"
          register={{ ...register("email") }}
        />
        <Input
          type="password"
          label="Şifreniz"
          className="mt-4"
          isPassword={true}
          register={{ ...register("password") }}
          autoComplete="new-password"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        isDisabled={Object.keys(errors).length > 0 ? true : false}
        loadingText="giriş yapmak..."
      >
        Devam Et
      </Button>

      <p className="opacity-40 text-sm my-6 w-full text-center flex">
        <div className="w-full border-b-2 -translate-y-2"></div>
        <span className="text-nowrap px-5">ya da</span>
        <div className="w-full border-b-2 -translate-y-2"></div>
      </p>

      <Link
        to={"/forgot-password"}
        className="text-success block text-center font-medium text-sm"
      >
        Şifremi Unuttum
      </Link>
    </form>
  );
};
