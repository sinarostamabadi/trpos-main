import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState & {
  companyInformationInfo:any,
  authorizeInformation:any
} = {
  info: {},
  companyInformationInfo:{},
  authorizeInformation:{},
  step: 1,
  loading: false,
};

const companyApplicationSlice = createSlice({
  initialState,
  name: "companyApplication",   
  reducers: {
    setCompanyApplicationInfo: (state, action) => {
      state.info = action.payload;
    },
    setCompanyInformationInfo:(state , action) => {
      state.companyInformationInfo=action.payload;
    },
    setCompanyApplicationStep: (state, action: { payload: number }) => {
      state.step = action.payload;
    },
    setAuthorizeInformation:(state , action) => {
      state.authorizeInformation=action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = companyApplicationSlice;
export const { setCompanyApplicationInfo , setCompanyInformationInfo , setAuthorizeInformation , setCompanyApplicationStep , setLoading } = actions;
export default reducer;