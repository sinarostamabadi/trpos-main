import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordInputs } from "../forgot-password.types";
import * as yup from "yup";

export const PasswordInfo = () => {
  const loginSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .required("Cep telefonu numarasını veya e-posta adresini girin")
      .test("email_or_phone", "Email / Phone is invalid", (value) => {
        return validateEmail(value) || validatePhone(parseInt(value ?? "0"));
      }),
    lang: yup.string(),
    phoneCountry: yup.string(),
    email: yup
      .string()
      .required()
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
    ip: yup.string(),
    version: yup.string(),
    customerNo: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<ForgotPasswordInputs>({
    defaultValues: {
      customerNo: "100",
      lang: "tr",
      phoneCountry: "",
      phoneNumber: "",
      email: "",
      ip: "1.1.1.1",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => {
    console.log(data);
  };

  const validateEmail = (email: string | undefined) => {
    return yup.string().email().isValidSync(email);
  };

  const validatePhone = (phone: number | undefined) => {
    return yup
      .number()
      .required()
      .integer()
      .positive()
      .test((phone) => {
        return phone &&
          phone.toString().length >= 8 &&
          phone.toString().length <= 14
          ? true
          : false;
      })
      .isValidSync(phone);
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] sm:min-w-96 sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm mt-[10%]"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Şifremi unuttum.
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Şifrenizi sıfırlayınız.
        </p>
      </div>
      <div className="mt-6">
        <Input
          label="Cep No ya da E-Posta"
          register={{ ...register("phoneNumber") }}
          error={errors.phoneNumber?.message}
          touched={touchedFields.phoneNumber}
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
        to={"/change-phone"}
        className="text-success block text-center font-medium text-sm"
      >
        Cep Numaranı Değiştir
      </Link>
    </form>
  );
};
