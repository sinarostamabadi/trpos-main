import { Link } from "react-router-dom";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/inputs";
import { SignupInput } from "../../signup/types/signup.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

export const PhoneInfo = () => {
  const registerSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), "Not match"]),
    checkbox_role_1: yup.bool().required().oneOf([true]),
    checkbox_role_2: yup.bool().required().oneOf([true]),
    checkbox_role_3: yup.bool().required().oneOf([true]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Telefon numaramı değiştir.
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Şifrenizi sıfırlayınız.
        </p>
      </div>
      <div className="mt-6">
        <div className="lg:flex gap-x-1 justify-between">
          <Input
            label="Mevcut Telefon Numaranız"
            register={{ ...register("firstName") }}
            className="lg:w-1/2"
          />
          <Input
            label="Yeni Telefon Numaranız"
            register={{ ...register("lastName") }}
            className="lg:w-1/2 mt-4 lg:mt-0"
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
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        isDisable={Object.keys(errors).length > 0 ? true : false}
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
