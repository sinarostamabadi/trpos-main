import { Router } from "./routes";
import "./assets/fonts/style.css";
import { useEffect } from "react";
import { useGetClientIp } from "./hooks/get-client-ip";
import { useAppDispatch } from "./hooks/redux-hooks";
import { setIP } from "./redux/reducers/_ip";

export default function App() {
  const dispatch = useAppDispatch();

  localStorage.trpos__lng = "TR";

  useEffect(() => {
    fetchIp();
  }, []);

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
