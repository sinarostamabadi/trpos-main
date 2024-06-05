import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState & {
    taskTypes:any
} = {
  info: {},
  taskTypes:{},
  loading: false,
};

const taskSlice = createSlice({
  initialState,
  name: "task",   
  reducers: {
    setTasks: (state, action) => {
      state.info = action.payload;
    },
    setTaskTypes:(state , action) => {
        state.taskTypes=action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = taskSlice;
export const { setTasks , setTaskTypes , setLoading } = actions;
export default reducer;
