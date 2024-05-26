import { useEffect } from "react";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "../types/login.types";
import { Link } from "react-router-dom";
import * as yup from "yup";

export const RequestLogin: React.FC = () => {
  const phoneRegex = /^\+([1-9]{1,3})([0-9]{8,13})$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const loginSchema = yup.object().shape({
    phoneOrEmail: yup
      .string()
      .required()
      .test(
        "is_phone_or_email",
        "Telefon formatı: +901234567... E-posta Formatı: kullanıcı@example.com",
        (value) => phoneRegex.test(value) || emailRegex.test(value)
      ),
    password: yup
      .string()
      .min(6, "Şifre 6 rakamdan oluşmalıdır")
      .max(6, "Maksimum 6 karakter")
      .required()
      .matches(/^\d{6}$/, "Yalnızca sayılara izin verilir"),
    phoneNumber: yup.string(),
    lang: yup.string(),
    phoneCountry: yup.string(),
    email: yup.string(),
    ip: yup.string(),
    version: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<LoginInputs>({
    defaultValues: {
      phoneOrEmail: "",
      lang: "tr",
      phoneCountry: "",
      phoneNumber: "",
      password: "",
      email: "",
      ip: "1.1.1.1",
      version: "",
    },
    resolver: yupResolver(loginSchema),
    mode:"onChange"
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-max sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm -mt-10"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Giriş yap.
        </h1>
        <p className="text-sm text-base-content-60 t mt-2">
          Telefon ya da E-Postanız ile giriş yapınız.
        </p>
      </div>
      <div className="mt-6">
        <Input
          label="Cep No ya da E-Posta"
          register={{ ...register("phoneOrEmail") }}
          error={errors.phoneOrEmail?.message}
          touched={touchedFields.phoneOrEmail}
          className="mb-4"
          isPhoneOrEmail
        />
        <Input
          type="password"
          label="Şifre"
          register={{ ...register("password") }}
          error={errors.password?.message}
          touched={touchedFields.password}
          isPassword={true}
          autoComplete="new-password"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        loadingText="giriş yapmak..."
        isDisabled={Object.keys(errors).length > 0 ? true : false}
      >
        Devam Et
      </Button>
      <div className="w-full flex justify-center items-center gap-6 text-sm text-base-content-80 mt-6">
        <Link to={"/change-phone"}>Telefon Numaram Değişti</Link>
        <div className="w-2 h-2 rounded-full bg-base-content/20"></div>
        <Link to={"/forgot-password"}>Şifremi Unuttum</Link>
      </div>
    </form>
  );
};
