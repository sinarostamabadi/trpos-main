import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../../../../components/button";
import { FileUploader } from "../../../../../../components/uploader";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux-hooks";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

type StepTwoInputType = {
  title:string,
  province:string,
  district:string,
  address:string,
  buildingNumber:string,
  doorNumber:string
}

export const StepFourCorporate = () => {
  const { companyInformationInfo , authorizeInformation }=useAppSelector(state => state.companyApplicationSlice);

  console.log(companyInformationInfo , authorizeInformation);

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
  });

  const onSubmit : SubmitHandler<StepTwoInputType> = async (data) => {
    console.log(data);
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <FileUploader id="Kartı" title="Kimlik Kartı Ön Yüz" />
        <FileUploader id="Levhası" title="Vergi Levhası" />
        <FileUploader id="İmza" title="İmza Sirküsü" />
        <FileUploader
          id="Mobil"
          title="Hesap Dekontu - Mobil Bankacılık Ekran Görüntüsü"
        />
      </div>

      <Button variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
