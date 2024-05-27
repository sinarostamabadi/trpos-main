import { Router } from "./routes";
import { Toaster } from "react-hot-toast";
import "./assets/fonts/style.css";

export default function App() {
  return (
    <>
      <Router />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
