import { Button } from "../../../../components/button"
import { Input } from "../../../../components/inputs"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm , SubmitHandler } from "react-hook-form"
import { LoginInputs } from "../types/login.types";

export const RequestLogin:React.FC = () => {

    const validate=yup.object().shape({
        phoneNumber:yup.string()
           .required('Cep telefonu numarasını veya e-posta adresini girin')
           .test('email_or_phone', 'Email / Phone is invalid', (value) => {
              return validateEmail(value) || validatePhone(parseInt(value ?? '0'));
           }),
        password:yup.string().required("لطفا رمز عبور خود را وارد کنید")
      })
  
      const {register , handleSubmit , formState:{errors , touchedFields}}=useForm<LoginInputs>({
          resolver:yupResolver(validate),
          mode:"all"
      });
  
      const onSubmit:SubmitHandler<LoginInputs>=(data) => {
          console.log(data);
      }
     
     const validateEmail = (email: string | undefined) => {
        return yup.string().email().isValidSync(email)
     };
     
     const validatePhone = (phone: number | undefined) => {
        return yup.number().integer().positive().test(
           (phone) => {
             return (phone && phone.toString().length >= 8 && phone.toString().length <= 14) ? true : false;
           }
         ).isValidSync(phone);
     };

    return (
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm">
                    <div>
                        <h1 className='xl:text-2xl text-base-content font-semibold'>
                            Giriş yap.
                        </h1>
                        <p className='text-sm text-base-content-60 t mt-2'>
                            Telefon ya da E-Postanız ile giriş yapınız.
                        </p>
                    </div>
                    <div className="mt-6">
                        <Input label="Cep No ya da E-Posta" register={{...register("phoneNumber")}} error={errors.phoneNumber?.message} touched={touchedFields.phoneNumber} />
                        <Input type="password" label="Şifre" register={{...register("password")}} error={errors.password?.message} isPassword={true} />
                    </div>
                    <Button type="submit" variant="primary" size="medium" shape="full" className="mt-6" loadingText="ورود...">
                        Devam Et
                    </Button>
                    <div className="w-full flex justify-center items-center gap-6 text-sm text-base-content-80 mt-6">
                        <p>Telefon Numaram Değişti</p>
                        <div className="w-2 h-2 rounded-full bg-base-content/20"></div>
                        <p>Şifremi Unuttum</p>
                    </div>
                </form>
    )
}