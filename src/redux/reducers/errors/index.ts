import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: [],
};

const errorsSlice = createSlice({
  initialState,
  name: "errors",
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

const { reducer, actions } = errorsSlice;
export const { setErrors } = actions;
export default reducer;
