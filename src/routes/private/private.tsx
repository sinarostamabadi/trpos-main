import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

export const Private: React.FC = () => {
  const { expireTime } = useAppSelector((state) => state.loginSlice);

  // -------- variables --------
  const token = localStorage.trpos__access_token;
  const tokenExpireTime = new Date(+expireTime * 1000);

  // -------- code to be executed ---------
  if (tokenExpireTime < new Date()) {
    localStorage.trpos__access_token = "";
    localStorage.trpos__user_info = "";
    <Navigate to="/login" />;
  }

  // console.log(expireTime);
  // console.log(tokenExpireTime);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
