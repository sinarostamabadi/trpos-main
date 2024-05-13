import { Route, Routes } from "react-router-dom";
import { Private } from "./private/private";
import { Suspense, lazy } from "react";

// begin:: Lazy imports
const AuthLayout = lazy(() => import("../layout/_auth"));
const PanelLayout = lazy(() => import("../layout/_panel"));
const Login = lazy(() => import("../pages/auth/login"));
const SignUp = lazy(() => import("../pages/auth/signup"));
const WebManagement = lazy(() => import("../pages/panel/web-management"));
const LinkPayment = lazy(() => import("../pages/panel/link-payment"));
// end:: Lazy imports

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-phone" element={<ChangePhone />} /> */}
        </Route>

        <Route path="/" element={<PanelLayout />}>
          <Route path="webManagement" element={<WebManagement />} />
          <Route path="linkPayment" element={<LinkPayment />} />
          {/* <Route index element={<Dashboard />} /> */}
          {/*  .......pages routes...... */}
        </Route>

        <Route element={<Private />}>

        </Route>
      </Routes>
    </Suspense>
  );
};
