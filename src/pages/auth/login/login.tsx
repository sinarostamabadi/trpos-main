import { useState } from "react";
import { dataState } from "./types/login.types";
import { RequestLogin } from "./components/request-login";
import { CheckOtp } from "./components/check-Otp";

const Login: React.FC = () => {
  const [data, setData] = useState<dataState>({
    step: 1,
    payload: {
      phoneNumber: "09038970963",
      password: "",
    },
  });
  // const {info , loading}=useAppSelector(state => state.loginSlice);

  return <>{data.step === 2 ? <RequestLogin /> : <CheckOtp data={data} />}</>;
};

export default Login;
