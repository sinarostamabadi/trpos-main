import { combineReducers } from "redux";
import IpSlice from "./_ip";
import buttonLoadingSlice from "./button-loading";
import errorsSlice from "./errors";
import showModalSlice from "./show-modal";
import signupSlice from "./auth/signup";
import loginSlice from "./auth/login";
import contractTypeSlice from "./settings/contract-type";
import contractSlice from "./settings/contract";
import resendCodeSlice from './settings/resend-code'
import forgetPasswordSlice from "./auth/forget-password";

export const reducers = combineReducers({
  IpSlice,
  buttonLoadingSlice,
  errorsSlice,
  showModalSlice,
  signupSlice,
  loginSlice,
  contractTypeSlice,
  contractSlice,
  resendCodeSlice,
  forgetPasswordSlice,
});

export type RootReducer = ReturnType<typeof reducers>;
