import { useAppSelector } from "../../../hooks/redux-hooks";
import { PasswordInfo } from "./components/password-info";
import { SetPassword } from "./components/set-password";

const ForgotPassword = () => {
  const { step } = useAppSelector((state) => state.forgetPasswordSlice);

  return step === 0 ? <PasswordInfo /> : <SetPassword />;
};

export default ForgotPassword;
