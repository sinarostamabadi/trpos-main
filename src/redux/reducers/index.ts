import { combineReducers } from "redux";
import IpSlice from "./_ip";
import buttonLoadingSlice from "./button-loading";
import contentLoadingSlice from "./content-loading";
import errorsSlice from "./errors";
import showModalSlice from "./show-modal";
import signupSlice from "./auth/signup";
import loginSlice from "./auth/login";
import contractTypeSlice from "./settings/contract-type";
import contractSlice from "./settings/contract";
import resendCodeSlice from "./settings/resend-code";
import forgetPasswordSlice from "./auth/forget-password";
import successMessageSlice from "./success-response";
import changePhoneSlice from "./auth/change-phone";
import userCustomerSlice from "./settings/user-customer";
import companyApplicationSlice from "./settings/company-application";
import userInfoSlice from "./settings/user-info";
import requestSlice from "./settings/request";
import customerApplicationSlice from "./settings/customer-application";
import professionSlice from "./settings/profession";

export const reducers = combineReducers({
  IpSlice,
  buttonLoadingSlice,
  contentLoadingSlice,
  errorsSlice,
  showModalSlice,
  signupSlice,
  loginSlice,
  contractTypeSlice,
  contractSlice,
  resendCodeSlice,
  forgetPasswordSlice,
  successMessageSlice,
  changePhoneSlice,
  userCustomerSlice,
  companyApplicationSlice,
  userInfoSlice,
  requestSlice,
  customerApplicationSlice,
  professionSlice,
});

export type RootReducer = ReturnType<typeof reducers>;
