import { Button } from "../../../../../../components/button";
import { Input } from "../../../../../../components/input";
import { useForm , SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux-hooks";
import { controlBeforeRegistration } from "../../../../../../redux/actions/settings/request";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputErrorComponent } from "../../../../../../components/inputError";
import { ErrorField } from "../../../../../../components/error-field/error-field";

type stepOneInputs = {
  identityTax:string
}

export const StepOneCorporate = () => {
  const { error }=useAppSelector(state => state.companyApplicationSlice);
  const { isButtonLoading } = useAppSelector(state => state.buttonLoadingSlice);

  console.log(error);

  const dispatch=useAppDispatch();

  const validate=yup.object().shape({
    identityTax:yup.string().required("Kimlik Vergisi zorunlu bir alandır").matches(/^[0-9]*$/ , "TCKN veya VKN sadece rakamlardan oluşmalıdır").min(10 , "TCKN veya VKN 10 karakterden az, 11 karakterden fazla olamaz.")
    .max(11 , "TCKN veya VKN 10 karakterden az, 11 karakterden fazla olamaz.")
  })


  const { register , handleSubmit , formState:{errors} }=useForm<stepOneInputs>({
    resolver:yupResolver(validate),
    mode:"all"
  });

  console.log(errors);

  const onSubmit: SubmitHandler<stepOneInputs> = (data) => {
    dispatch(controlBeforeRegistration(data));
  }

  return (
    <form className="pe-2" onSubmit={handleSubmit(onSubmit)}>
      {
        error && <ErrorField text={error[0]} />
      }
      <Input label="TCKN - Vergi No" className="mt-4" register={{...register("identityTax")}} error={errors.identityTax?.message} />
      <InputErrorComponent text={errors.identityTax?.message} />

      <Button type="submit" variant="primary" shape="full" className="my-6" isLoading={isButtonLoading}>
        Devam Et
      </Button>
    </form>
  );
};
