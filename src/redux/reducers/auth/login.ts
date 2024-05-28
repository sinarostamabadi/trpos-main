import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  step: 0,
  expireTime: "",
  loading: false,
};

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    setLoginInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
    setLoginStep: (state, action) => {
      state.step = action.payload;
    },
    setLoginExpireTime: (state, action) => {
      state.expireTime = action.payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { setLoginInfo, setLoading, setLoginStep, setLoginExpireTime } =
  actions;
export default reducer;
