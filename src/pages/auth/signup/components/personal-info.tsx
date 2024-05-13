import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { SignupInput } from "../types/signup.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox } from "../../../../components/checkbox";
import { RuleModal } from "./modal/rules";
import * as yup from "yup";

export const PersonalInfo: React.FC = () => {
  const [rulesAccepted, setRulesAccepted] = useState({
    rule_one: false,
    rule_two: false,
    rule_three: false,
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const registerSchema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
    surname: yup.string().min(3).max(50).required(),
    phoneNumber: yup
      .string()
      .required()
      .matches(/^\+(?:[0-9]●?){6,14}[0-9]$/),
    email: yup.string().required(),
    password: yup
      .string()
      .min(8, "Minimum 8 karakter")
      .max(16, "Maksimum 16 karakter")
      .required()
      .matches(
        /^(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir"
      ),
    passwordRepeat: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Şifre ve tekrar şifre eşleşmiyor"),
    ip: yup.string().required(),
    lang: yup.string().required(),
    checkbox_role_1: yup.bool().required().oneOf([true]),
    checkbox_role_2: yup.bool().required().oneOf([true]),
    checkbox_role_3: yup.bool().required().oneOf([true]),
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<SignupInput>({
    defaultValues: { ip: "1.1.1.1", lang: "tr" },
    resolver: yupResolver(registerSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    trigger();
  }, [trigger]);
  // console.log(error);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
    >
      <RuleModal
        state={isModalOpen}
        handleRuleAccept={() => {
          setRulesAccepted({
            rule_one: true,
            rule_two: true,
            rule_three: true,
          });
          setIsModalOpen(false);
        }}
        handleCloseModal={() => setIsModalOpen(false)}
      />
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Trpos’a üye ol.
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Lütfen formu doldurunuz.
        </p>
      </div>
      <div className="mt-6">
        <div className="lg:flex gap-x-3 justify-between">
          <Input
            label="Adınız"
            register={{ ...register("name") }}
            touched={touchedFields.name}
            error={errors.name?.message}
          />
          <Input
            label="Soyadınız"
            register={{ ...register("surname") }}
            className="mt-4 lg:mt-0"
            touched={touchedFields.surname}
            error={errors.surname?.message}
          />
        </div>
        <Input
          label="Cep No"
          className="mt-4"
          register={{ ...register("phoneNumber") }}
          touched={touchedFields.phoneNumber}
          error={errors.phoneNumber?.message}
        />
        <Input
          type="email"
          label="E-Posta"
          className="mt-4"
          register={{ ...register("email") }}
          touched={touchedFields.email}
          error={errors.email?.message}
        />
        <div className="lg:flex gap-x-3 justify-between lg:mt-4">
          <Input
            type="password"
            label="Şifre"
            className="mt-4 lg:mt-0"
            isPassword={true}
            register={{ ...register("password") }}
            touched={touchedFields.password}
            error={errors.password?.message}
            autoComplete="new-password"
          />
          <Input
            type="password"
            label="Şifre (Tekrar)"
            className="mt-4 lg:mt-0"
            isPassword={true}
            register={{ ...register("passwordRepeat") }}
            touched={touchedFields.passwordRepeat}
            error={errors.passwordRepeat?.message}
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
          touched={touchedFields.checkbox_role_1}
          isChecked={rulesAccepted.rule_one}
          handleClick={() => setIsModalOpen(true)}
        />

        <CheckBox
          id="checkbox_roles_2"
          className="mt-2"
          register={{ ...register("checkbox_role_2") }}
          label="’ni okudum, anladım ve onaylıyorum."
          linkLabel="Açık Rıza Metni"
          touched={touchedFields.checkbox_role_2}
          isChecked={rulesAccepted.rule_two}
          handleClick={() => setIsModalOpen(true)}
        />

        <CheckBox
          id="checkbox_roles_3"
          className="mt-2"
          register={{ ...register("checkbox_role_3") }}
          label="’ni okudum, anladım ve onaylıyorum."
          linkLabel="Trpos Kullanıcı Sözleşmesi"
          touched={touchedFields.checkbox_role_3}
          isChecked={rulesAccepted.rule_three}
          handleClick={() => setIsModalOpen(true)}
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
    </form>
  );
};
