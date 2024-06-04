import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../../../components/button";
import { CheckBox } from "../../../../../../components/checkboxes";
import { Input } from "../../../../../../components/input";
import { PhoneInput } from "../../../../../../components/phoneInput";
import { SelectInput } from "../../../../../../components/select";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux-hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect , useState } from "react";
import { setAuthorizeInformation, setCompanyApplicationStep } from "../../../../../../redux/reducers/settings/company-application";
import { InputErrorComponent } from "../../../../../../components/inputError";
import { parsePhoneNumber } from "../../../../../../helper/parse-phone";

type StepThreeInputsType = {
  AuthName:string,
  AuthSurName:string,
  AuthEmail:string,
  AuthGsmNo:string,
  AuthProfessionId:string,
  identityNo:string,
  birthDate:string,
}

export const StepThreeCorporate = () => {
  const { info:userInfo }=useAppSelector(state => state.userInfoSlice);

  const [checkBoxValue , setCheckBoxValue]=useState<boolean>(false);

  const dispatch=useAppDispatch();

  const validate=yup.object().shape({
    AuthName:yup.string().required("Yetkili Adı zorunlu bir alandır"),
    AuthSurName:yup.string().required("Yetkili Soyadı zorunlu bir alandır"),
    AuthEmail:yup.string().required("Yetkili E-Posta zorunlu bir alandır"),
    AuthGsmNo:yup.string().required("Yetkili Cep Numarası zorunlu bir alandır"),
    AuthProfessionId:yup.string().required("Meslek zorunlu bir alandır"),
    identityNo:yup.string().required("Yetkili Kimlik Numarası zorunlu bir alandır"),
    birthDate:yup.string().required("Yetkili Doğum Tarihi zorunlu bir alandır"),
  })

  const { register , handleSubmit , control , formState:{errors} , reset }=useForm<StepThreeInputsType>({
    resolver:yupResolver(validate),
    defaultValues:{
          AuthName:"",
          AuthSurName:"",
          AuthEmail:"",
          AuthGsmNo:"",
          identityNo:"",
          birthDate:"",
          AuthProfessionId:""
    }
  });

  useEffect(() => {
    if(checkBoxValue) {
      reset({
        AuthName:userInfo.name,
          AuthSurName:userInfo.surName,
          AuthEmail:userInfo.email,
          AuthGsmNo:userInfo.phoneNumber,
          identityNo:"",
          birthDate:userInfo.birthDate,
          AuthProfessionId:userInfo.AuthProfessionId
      })
    } else {
      reset({
          AuthName:"",
          AuthSurName:"",
          AuthEmail:"",
          AuthGsmNo:"",
          identityNo:"",
          birthDate:"",
          AuthProfessionId:""
      })
    }
  } , [checkBoxValue]);

  const onSubmit : SubmitHandler<StepThreeInputsType> =async (data) => {

    console.log(data);

    const parsedPhone = parsePhoneNumber("+"+data.AuthGsmNo);

    dispatch(setAuthorizeInformation({...data , AuthGsmNo:parsedPhone?.number , AuthGsmCountry:parsedPhone?.country}));
    dispatch(setCompanyApplicationStep(4));
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <CheckBox
          id="Başvuran"
          label="Başvuran kişi ile yetkili kişi aynı ise tıklayınız."
          className="mb-4"
          onChange={(event) => {
              console.log(event.target.checked);
              setCheckBoxValue(event.target.checked);
            }
          }
        />
        <div className="flex gap-x-3">
          <div className="w-full">
            <Input label="Yetkili Adı" register={{...register("AuthName")}} readOnly={checkBoxValue ? false : false} error={errors.AuthName?.message} />
            {errors.AuthName &&
              <InputErrorComponent text={errors.AuthName?.message} />
            }
          </div>
          <div className="w-full">
            <Input label="Yetkili Soyadı" register={{...register("AuthSurName")}} readOnly={checkBoxValue ? false : false} error={errors.AuthSurName?.message} />
            {errors.AuthSurName &&
              <InputErrorComponent text={errors.AuthSurName?.message} />
            }
          </div>
        </div>
          <div>
          <Input label="Yetkili E-Posta" type="email" register={{...register("AuthEmail")}} readOnly={checkBoxValue ? true : false} error={errors.AuthEmail?.message} inputClassName={checkBoxValue ? "cursor-not-allowed" : ""} />
          {errors.AuthEmail &&
            <InputErrorComponent text={errors.AuthEmail?.message} />
          }
        </div>
        <div>
          <PhoneInput label="Yetkili Cep Numarası" register={{...register("AuthGsmNo")}} readOnly={checkBoxValue ? true : false} error={errors.AuthGsmNo?.message} inputClassName={checkBoxValue ? "cursor-not-allowed" : ""} />
          {errors.AuthGsmNo &&
            <InputErrorComponent text={errors.AuthGsmNo?.message} />
          }
        </div>
        <div>
          <Input label="Yetkili Kimlik Numarası" register={{...register("identityNo")}} readOnly={checkBoxValue ? false : false} error={errors.identityNo?.message} />
          {errors.identityNo &&
            <InputErrorComponent text={errors.identityNo?.message} />
          }
        </div>
        <div>
          <Input label="Yetkili Doğum Tarihi" type="date" register={{...register("birthDate")}} />
          { errors.birthDate &&
            <InputErrorComponent text={errors.birthDate?.message} />
          }
        </div>
        <div>
          <SelectInput options={[{value:"1" , label:<span>test</span>}]} control={control} name="AuthProfessionId" placeholder="Meslek" register={{...register("AuthProfessionId")}} disable={checkBoxValue ? false : false} error={errors.AuthProfessionId?.message} />
          {errors.AuthProfessionId &&
            <InputErrorComponent text={errors.AuthProfessionId?.message} />
          }
        </div>
      </div>

      <Button type="submit" variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
