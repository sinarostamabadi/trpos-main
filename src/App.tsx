import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/fonts/style.css";

export default function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Router />
    </>
  );
}
