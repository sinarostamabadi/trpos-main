import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  step:1,
  loading: false,
};

const changePhoneSlice = createSlice({
  initialState,
  name: "changePhone",
  reducers: {
    setChangePhoneInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = changePhoneSlice;
export const { setChangePhoneInfo , setLoading } = actions;
export default reducer;
