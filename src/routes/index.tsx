import { Route, Routes } from "react-router-dom";
import { Private } from "./private/private";
import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/signup";
import { Suspense } from "react";
import { AuthLayout } from "../layout/_auth";
import { PanelLayout } from "../layout/_panel";

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-phone" element={<ChangePhone />} /> */}
        </Route>

        <Route element={<Private />}>
          <Route path="/" element={<PanelLayout />}>
            {/* <Route index element={<Dashboard />} /> */}
            {/*  .......pages routes...... */}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
