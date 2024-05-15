import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { SelectInput } from "../../../../components/select/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { SetPasswordInputs } from "../forgot-password.types";
import * as yup from "yup";

export const SetPassword = () => {
  const setPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, "Şifre 6 rakamdan oluşmalıdır")
      .max(6, "Maksimum 6 karakter")
      .required()
      .matches(/^\d{6}$/, "Yalnızca sayılara izin verilir"),
    confirmPassword: yup
      .string()
      .required("Şifre tekrarı zorunlu bir alandır")
      .oneOf([yup.ref("password")], "Şifre ve tekrar şifre eşleşmiyor"),
    passwordEndDate: yup.number(),
    ip: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<SetPasswordInputs>({
    defaultValues: {
      ip: "1.1.1.1",
    },
    resolver: yupResolver(setPasswordSchema),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const onSubmit: SubmitHandler<SetPasswordInputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 mt-[15%] rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Şifreni Belirle
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Sonu 6707 ile biten numarana kod gönderdik. Kimliğinden emin
          olmalıyız.
        </p>
      </div>
      <div className="mt-6">
        <div className="">
          <Input
            type="password"
            label="Yeni Şifreniz"
            className=""
            isPassword={true}
            register={{ ...register("password") }}
            error={errors.password?.message}
            touched={touchedFields.password}
          />
          <Input
            type="password"
            label="Yeni Şifreniz (Tekrardan)"
            className="mt-4"
            isPassword={true}
            register={{ ...register("confirmPassword") }}
            error={errors.confirmPassword?.message}
            touched={touchedFields.confirmPassword}
          />
          <SelectInput
            placeholder="Şifre Değiştirme Süresi"
            options={[
              { value: 3, label: "3 ay" },
              { value: 6, label: "6 ay" },
              { value: 12, label: "1 yıl" },
            ]}
            className="mt-4 w-full"
            error={errors.passwordEndDate?.message}
            touched={touchedFields.passwordEndDate}
            register={{ ...register("passwordEndDate") }}
          />
        </div>
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
