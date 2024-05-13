import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { PhoneInput } from "../../../../components/phoneInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { changePhoneInputs } from "../change-phone.types";
import * as yup from "yup";

export const PhoneInfo = () => {
  const registerSchema = yup.object().shape({
    customerNo: yup.string().required(),
    lang: yup.string().required(),
    phoneCountry: yup.string(),
    phoneNumber: yup
      .string()
      .required("Telefon numarası gerekli")
      .matches(
        /^\+([1-9]{1,3})([0-9]{1,3})?([-.\s]?[0-9]{1,4}){1,3}$/,
        "Biçim: +901234567..."
      ),
    ip: yup.string().required(),
    currentPhoneNumber: yup
      .string()
      .required("Telefon numarası gerekli")
      .matches(
        /^\+([1-9]{1,3})([0-9]{1,3})?([-.\s]?[0-9]{1,4}){1,3}$/,
        "Biçim: +901234567..."
      ),
    currentPhoneCountry: yup.string(),
    email: yup
      .string()
      .required()
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
    password: yup
      .string()
      .min(6, "Şifre 6 rakamdan oluşmalıdır")
      .max(6, "Maksimum 6 karakter")
      .required()
      .matches(/^\d{6}$/, "Yalnızca sayılara izin verilir"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<changePhoneInputs>({
    defaultValues: {
      customerNo: "100",
      lang: "tr",
      phoneCountry: "",
      // phoneNumber: "",
      ip: "1.1.1.1",
      // currentPhoneNumber: "",
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
      className="w-full max-w-[500px] sm:min-w-[550px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
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
          <PhoneInput
            label="Mevcut Telefon Numaranız"
            register={{ ...register("currentPhoneNumber") }}
            touched={touchedFields.currentPhoneNumber}
            error={errors.currentPhoneNumber?.message}
          />
          <PhoneInput
            label="Yeni Telefon Numaranız"
            register={{ ...register("phoneNumber") }}
            className="mt-4 lg:mt-0"
            touched={touchedFields.phoneNumber}
            error={errors.phoneNumber?.message}
          />
        </div>
        <Input
          type="email"
          label="E-Posta Adresiniz"
          className="mt-4"
          register={{ ...register("email") }}
          touched={touchedFields.email}
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="Şifreniz"
          className="mt-4"
          isPassword={true}
          register={{ ...register("password") }}
          autoComplete="new-password"
          touched={touchedFields.password}
          error={errors.password?.message}
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
