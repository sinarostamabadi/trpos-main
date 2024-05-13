import { Route, Routes } from "react-router-dom";
import { Private } from "./private/private";
import { Suspense, lazy } from "react";
import { SplashScreen } from "../components/splashScreen";

// begin:: Lazy imports
const AuthLayout = lazy(() => import("../layout/_auth"));
const PanelLayout = lazy(() => import("../layout/_panel"));
const Login = lazy(() => import("../pages/auth/login"));
const SignUp = lazy(() => import("../pages/auth/signup"));
const ChangePhone = lazy(() => import("../pages/auth/change-phone"));
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"));
// end:: Lazy imports

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/change-phone" element={<ChangePhone />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route path="/dashboard" element={<PanelLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          {/*  .......pages routes...... */}
        </Route>

        <Route element={<Private />}>
        </Route>
      </Routes>
    </Suspense>
  );
};
