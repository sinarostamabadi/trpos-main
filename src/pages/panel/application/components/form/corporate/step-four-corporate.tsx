import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../../../../components/button";
import { FileUploader } from "../../../../../../components/uploader";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux-hooks";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

type StepTwoInputType = {
  identityCardFile?:any,
  Tax_Plate?:any,
  Circular_of_Signuture?:any,
  Recepit_lban?:any,
}

export const StepFourCorporate = () => {
  const { companyInformationInfo , authorizeInformation }=useAppSelector(state => state.companyApplicationSlice);

  console.log(companyInformationInfo , authorizeInformation);

  const dispatch=useAppDispatch();

  const validate=yup.object().shape({
    
  });

  const {register , handleSubmit , watch , formState:{ errors } , getValues}=useForm<StepTwoInputType>({
    resolver:yupResolver(validate),
  });

  const onSubmit : SubmitHandler<StepTwoInputType> = async (data) => {
    console.log(data);
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <FileUploader id="Kartı" title="Kimlik Kartı Ön Yüz" register={{...register("identityCardFile")}} fileName={watch("identityCardFile") && watch("identityCardFile")[0].name} />
        <FileUploader id="Levhası" title="Vergi Levhası" register={{...register("Tax_Plate")}} fileName="" />
        <FileUploader id="İmza" title="İmza Sirküsü" register={{...register("Circular_of_Signuture")}} fileName="" />
        <FileUploader id="Mobil" title="Hesap Dekontu - Mobil Bankacılık Ekran Görüntüsü" register={{...register("Recepit_lban")}} fileName="" />
      </div>

      <Button type="submit" variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
