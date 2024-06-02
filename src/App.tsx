import { Router } from "./routes";
import "./assets/fonts/style.css";
import { useEffect } from "react";
import { useGetClientIp } from "./hooks/get-client-ip";
import { useAppDispatch } from "./hooks/redux-hooks";
import { setIP } from "./redux/reducers/_ip";
import { useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const dispatch = useAppDispatch();

  localStorage.trpos__lng = "TR";

  useEffect(() => {
    fetchIp();
  }, []);

  const navigate=useNavigate();
  const pathName=useLocation().pathname;
  const state=useLocation().state;

  useEffect(() => {
    if(!state?.token) {
      localStorage.removeItem("trpos__token");
      localStorage.removeItem("trpos__access_token");
      navigate("/login")
    }
  } , [pathName]);

  const fetchIp = async () => {
    const clientIp = await useGetClientIp();
    dispatch(setIP(clientIp));
  };
  
  return (
    <>
      <Router />
    </>
  );
}
