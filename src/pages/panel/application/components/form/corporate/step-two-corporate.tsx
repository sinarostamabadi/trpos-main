import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../../../components/button";
import { Input } from "../../../../../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux-hooks";
import { useMemo } from "react";
import { setAuthorizationInformation } from "../../../../../../redux/actions/settings/company-application";

type StepTwoInputType = {
  title:string,
  province:string,
  district:string,
  address:string,
  buildingNumber:string,
  doorNumber:string
}

export const StepTwoCorporate = () => {

  const { companyInformationInfo:companyInformation }=useAppSelector(state => state.companyApplicationSlice);
  const { isButtonLoading }=useAppSelector(state => state.buttonLoadingSlice);

  console.log(companyInformation);

  const dispatch=useAppDispatch();

  const validate=yup.object().shape({
    title:yup.string().required(),
    province:yup.string().required(),
    district:yup.string().required(),
    address:yup.string().required(),
    buildingNumber:yup.string().required(),
    doorNumber:yup.string().required()
  });

  const {register , handleSubmit , formState:{errors}}=useForm<StepTwoInputType>({
    resolver:yupResolver(validate),
    defaultValues:useMemo(() => {
      return {
        title:companyInformation.title,
        province:companyInformation.cityName,
        district:companyInformation.district,
        address:companyInformation.street,
        buildingNumber:companyInformation.doorNumber,
        doorNumber:companyInformation.flatNumber,
      }
    } , [companyInformation])
  });

  const onSubmit : SubmitHandler<StepTwoInputType> = async () => {
    dispatch(setAuthorizationInformation());
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <Input label="Unvan" register={{...register("title")}} error={errors.title?.message} readOnly={true} className="pointer-events-none" />
        <div className="flex gap-x-3">
          <Input label="İl" register={{...register("province")}} error={errors.province?.message} readOnly={true} className="pointer-events-none" />
          <Input label="İlçe" register={{...register("district")}} error={errors.district?.message} readOnly={true} className="pointer-events-none" />
        </div>
        <Input label="Adres" register={{...register("address")}} error={errors.address?.message} readOnly={true} className="pointer-events-none" />
        <div className="flex gap-x-3">
          <Input label="Bina No" register={{...register("buildingNumber")}} error={errors.buildingNumber?.message} readOnly={true} className="pointer-events-none" />
          <Input label="İç Kapı No" register={{...register("doorNumber")}} error={errors.doorNumber?.message} readOnly={true} className="pointer-events-none" />
        </div>
      </div>

      <Button type="submit" variant="primary" shape="full" className="my-3" isLoading={isButtonLoading}>
        Devam Et
      </Button>
    </form>
  );
};
