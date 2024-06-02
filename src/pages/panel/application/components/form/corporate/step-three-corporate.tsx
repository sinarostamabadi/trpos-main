import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../../../components/button";
import { CheckBox } from "../../../../../../components/checkboxes";
import { Input } from "../../../../../../components/input";
import { PhoneInput } from "../../../../../../components/phoneInput";
import { SelectInput } from "../../../../../../components/select";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux-hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { setCompanyApplicationStep } from "../../../../../../redux/reducers/settings/company-application";

type StepThreeInputsType = {
  name:string,
  lastName:string,
  email:string,
  phoneNumber:string,
  job?:string,
  identificationNumber:string,
  birthDay?:string,
  confirm:boolean
}

export const StepThreeCorporate = () => {
  const { info:userInfo }=useAppSelector(state => state.userInfoSlice);

  const dispatch=useAppDispatch();

  const validate=yup.object().shape({
    name:yup.string().required(),
    lastName:yup.string().required(),
    email:yup.string().required(),
    phoneNumber:yup.string().required(),
    job:yup.string(),
    identificationNumber:yup.string().required(),
    birthDay:yup.string(),
    confirm:yup.boolean().required().oneOf([true]),
  })

  const { register , handleSubmit , control , formState:{errors} }=useForm<StepThreeInputsType>({
    resolver:yupResolver(validate),
    defaultValues:useMemo(() => {
      return {
        name:userInfo.name,
        lastName:userInfo.surName,
        email:userInfo.email,
        phoneNumber:userInfo.phoneNumber,
        identificationNumber:userInfo.customerNo,
        birthDay:userInfo.birthDay,
        job:userInfo.job
      }
    } , [userInfo])
  });

  const onSubmit : SubmitHandler<StepThreeInputsType> = (data) => {
    dispatch(setCompanyApplicationStep(4));
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <CheckBox
          id="Başvuran"
          label="Başvuran kişi ile yetkili kişi aynı ise tıklayınız."
          className="mb-4"
          register={{...register("confirm")}}
          error={errors.confirm?.message}
        />
        <div className="flex gap-x-3">
          <Input label="Yetkili Adı" register={{...register("name")}} readOnly={true} className="pointer-events-none" />
          <Input label="Yetkili Soyadı" register={{...register("lastName")}} readOnly={true} className="pointer-events-none" />
        </div>
        <Input label="Yetkili E-Posta" type="email" register={{...register("email")}} readOnly={true} className="pointer-events-none" />
        <PhoneInput label="Yetkili Cep Numarası" register={{...register("phoneNumber")}} readOnly={true} className="pointer-events-none" />
        <Input label="Yetkili Kimlik Numarası" register={{...register("identificationNumber")}} readOnly={true} className="pointer-events-none" />
        <Input label="Yetkili Doğum Tarihi" type="date" register={{...register("birthDay")}} />
        <SelectInput control={control} name="job" placeholder="Meslek" register={{...register("job")}} disable={true} className="pointer-events-none" />
      </div>

      <Button type="submit" variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
