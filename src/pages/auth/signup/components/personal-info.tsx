import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/inputs";
import { SignupInput } from "../types/signup.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox } from "../../../../components/checkbox";

export const PersonalInfo: React.FC = () => {
  const validate = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    checkbox_role: yup.bool().required().oneOf([true]),
  });

  const { register, handleSubmit } = useForm<SignupInput>({
    resolver: yupResolver(validate),
  });

  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    console.log(data.firstName);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-3xl text-base-content font-semibold">ثبت نام</h1>
        <p className="text-base-content-light mt-1">
          لطفا اطلاعات خود را وارد کنید
        </p>
      </div>
      <div className="mt-6">
        <div className="w-full flex gap-2 items-center">
          <Input
            label="نام"
            placeholder="نام خود را وارد کنید"
            sizeInput="normal"
            register={{ ...register("firstName") }}
          />
          <Input
            label="نام خانوادگی"
            placeholder="نام خانوادگی خود را وارد کنید"
            sizeInput="normal"
            register={{ ...register("lastName") }}
          />
        </div>
        <Input
          label="شماره تلفن"
          placeholder="شماره تلفن خود را وارد کنید"
          sizeInput="normal"
          className="mt-4"
          register={{ ...register("phoneNumber") }}
        />
        <Input
          type="email"
          label="ایمیل"
          placeholder="ایمیل خود را وارد کنید"
          sizeInput="normal"
          className="mt-4"
          register={{ ...register("email") }}
        />
        <Input
          type="password"
          label="رمز عبور"
          placeholder="رمز عبور خود را وارد کنید"
          sizeInput="normal"
          className="mt-4"
          isPassword={true}
          register={{ ...register("password") }}
        />
        <Input
          type="password"
          label="تکرار رمز عبور"
          placeholder="رمز عبور خود را وارد کنید"
          sizeInput="normal"
          className="mt-4"
          isPassword={true}
          register={{ ...register("confirmPassword") }}
        />
      </div>
      <CheckBox
        id="checkbox_roles"
        className="mt-2"
        register={{ ...register("checkbox_role") }}
      >
        <div>
          ورود شما به منزله ی پزیرش
          <span className="text-primary mx-1">قوانین</span>و
          <span className="text-primary mx-1">مقررات</span>
          است
        </div>
      </CheckBox>
      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        loadingText="ورود..."
      >
        ثبت نام
      </Button>
    </form>
  );
};
