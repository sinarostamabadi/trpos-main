import { combineReducers } from "redux";
import loginSlice from "../../pages/auth/login/redux/reducer";

export const reducers = combineReducers({
  loginSlice,
});

export type RootReducer = ReturnType<typeof reducers>;
