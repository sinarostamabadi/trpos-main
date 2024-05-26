import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState = {
  info: {},
  loading: false,
};

const contractTypeSlice = createSlice({
  initialState,
  name: "contractType",
  reducers: {
    setContractTypeInfo: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = contractTypeSlice;
export const { setContractTypeInfo, setLoading } = actions;
export default reducer;
