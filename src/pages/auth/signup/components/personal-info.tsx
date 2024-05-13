import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/inputs";
import { SignupInput } from "../types/signup.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox } from "../../../../components/checkbox";
import * as yup from "yup";

export const PersonalInfo: React.FC = () => {
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
          Trpos’a üye ol.
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Lütfen formu doldurunuz.
        </p>
      </div>
      <div className="mt-6">
        <div className="lg:flex gap-x-1 justify-between">
          <Input
            label="Adınız"
            register={{ ...register("firstName") }}
            className="lg:w-1/2"
          />
          <Input
            label="Soyadınız"
            register={{ ...register("lastName") }}
            className="lg:w-1/2 mt-4 lg:mt-0"
          />
        </div>
        <Input
          label="Cep No"
          className="mt-4"
          register={{ ...register("phoneNumber") }}
        />
        <Input
          type="email"
          label="E-Posta"
          className="mt-4"
          register={{ ...register("email") }}
        />
        <div className="lg:flex gap-x-1 justify-between lg:mt-4">
          <Input
            type="password"
            label="Şifre"
            className="mt-4 lg:mt-0"
            isPassword={true}
            register={{ ...register("password") }}
          />
          <Input
            type="password"
            label="Şifre (Tekrar)"
            className="lg:w-1/2 mt-4 lg:mt-0"
            isPassword={true}
            register={{ ...register("confirmPassword") }}
          />
        </div>
      </div>

      <div className="mt-4">
        <CheckBox
          id="checkbox_roles_1"
          className="mt-2"
          register={{ ...register("checkbox_role_1") }}
          label="’ni okudum, anladım ve onaylıyorum."
          linkLabel="KVKK Aydınlatma Metni"
          isChecked={true}
        />

        <CheckBox
          id="checkbox_roles_2"
          className="mt-2"
          register={{ ...register("checkbox_role_2") }}
          label="’ni okudum, anladım ve onaylıyorum."
          linkLabel="Açık Rıza Metni"
          isChecked={false}
        />

        <CheckBox
          id="checkbox_roles_3"
          className="mt-2"
          register={{ ...register("checkbox_role_3") }}
          label="’ni okudum, anladım ve onaylıyorum."
          linkLabel="Trpos Kullanıcı Sözleşmesi"
          isChecked={false}
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
    </form>
  );
};
