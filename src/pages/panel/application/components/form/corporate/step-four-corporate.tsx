import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../../../../components/button";
import { FileUploader } from "../../../../../../components/uploader";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux-hooks";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { createCorporateApp } from "../../../../../../redux/actions/settings/request";

type StepFourInputType = {
  identityCardFile:any,
  Tax_Plate?:any,
  Circular_of_Signuture?:any,
  Recepit_lban?:any,
}

export const StepFourCorporate = () => {
  const { companyInformationInfo , authorizeInformation , identityTax }=useAppSelector(state => state.companyApplicationSlice);

  console.log(companyInformationInfo , authorizeInformation);

  const [fileNames , setFileNames]=useState<StepFourInputType>({
    identityCardFile:"",
    Tax_Plate:"",
    Circular_of_Signuture:"",
    Recepit_lban:""
  })

  const dispatch=useAppDispatch();

  const validate=yup.object().shape({
    identityCardFile:yup.mixed().required("Kimlik Kartı Ön Yüz gereklidir"),
  });

  const { register , handleSubmit , formState:{ errors } }=useForm<StepFourInputType>({
    resolver:yupResolver(validate),
  });

  const onSubmit : SubmitHandler<StepFourInputType> = async (data) => {
    dispatch(createCorporateApp({
      identityCardFile:data.identityCardFile[0],
      "RegistrationFile.Circular_of_Signuture":data.Circular_of_Signuture[0],
      "RegistrationFile.Tax_Plate":data.Tax_Plate[0],
      "RegistrationFile.Receipt_Iban":data.Recepit_lban[0],
      "RegistrationAddContractVerified.ContractVerified[0].IsConfirmed":true,
      "RegistrationAddContractVerified.ContractVerified[0].ContractTypeId":"1",
      ...identityTax,
      ...authorizeInformation
    }))
  };

  console.log(errors);

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <FileUploader id="Kartı" title="Kimlik Kartı Ön Yüz" register={{...register("identityCardFile" , {
          onChange:(event) => {
            setFileNames({...fileNames,identityCardFile:event.target.files[0].name})
          }
        })}} fileName={fileNames.identityCardFile} />
        <FileUploader id="Levhası" title="Vergi Levhası" register={{...register("Tax_Plate" , {
          onChange:(event) => {
            setFileNames({...fileNames,Tax_Plate:event.target.files[0].name})
          }
        })}} fileName={fileNames.Tax_Plate} />
        <FileUploader id="İmza" title="İmza Sirküsü" register={{...register("Circular_of_Signuture" , {
          onChange:(event) => {
            setFileNames({...fileNames,Circular_of_Signuture:event.target.files[0].name})
          }
        })}} fileName={fileNames.Circular_of_Signuture} />
        <FileUploader id="Mobil" title="Hesap Dekontu - Mobil Bankacılık Ekran Görüntüsü" register={{...register("Recepit_lban" , {
          onChange:(event) => {
            setFileNames({...fileNames,Recepit_lban:event.target.files[0].name})
          }
        })}} fileName={fileNames.Recepit_lban} />
      </div>

      <Button type="submit" variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
