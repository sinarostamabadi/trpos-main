import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelectLoading: false,
};

const selectLoadingSlice = createSlice({
  initialState,
  name: "selectLoading",
  reducers: {
    setSelectLoading: (state, action: { payload: boolean }) => {
        state.isSelectLoading=action.payload;
    },
  },
});

const { reducer, actions } = selectLoadingSlice;
export const { setSelectLoading } = actions;
export default reducer;
