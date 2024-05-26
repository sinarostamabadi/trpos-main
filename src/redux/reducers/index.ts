import { combineReducers } from "redux";
import IpSlice from "./_ip";
import buttonLoadingSlice from "./button-loading";
import errorsSlice from "./errors";
import loginSlice from "./auth/login";
import contractTypeSlice from "./settings/contract-type";
import contractSlice from "./settings/contract";

export const reducers = combineReducers({
  IpSlice,
  buttonLoadingSlice,
  errorsSlice,
  loginSlice,
  contractTypeSlice,
  contractSlice,
});

export type RootReducer = ReturnType<typeof reducers>;
