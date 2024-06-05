import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { AppDispatch } from "../../store/store";
import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";
import { setTasks , setTaskTypes , setLoading } from "../../reducers/helpAndSupport/task";
import { BASE_URL } from "../../../configs/global";
import { setSelectLoading } from "../../reducers/select-loading";

export const addTask =
  (data : {} , onCloseModal : () => void) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
        const response: AxiosResponse = await axios.post(
            BASE_URL+api.settingsApi.addTask,
            data,
            {
              headers : {
                "Authorization": `Bearer ${localStorage.trpos__access_token}`,
                "Content-Type":"multipart/form-data"
              }
            }
          );

          onCloseModal();
          dispatch(getAllTask());

    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };

  export const getAllTask =
  () => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    dispatch(setLoading(true));
    try {
        const response: AxiosResponse = await createData(
            api.settingsApi.getAllTask,
            {},
            {
              Authorization: `Bearer ${localStorage.trpos__access_token}`,
            } as AxiosRequestHeaders
          );

          dispatch(setTasks(response.data));

    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
      dispatch(setLoading(false));
    }
  };

  export const getAllTaskType =
  () => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    dispatch(setSelectLoading(true));
    try {
        const response: AxiosResponse = await createData(
            api.settingsApi.taskTypeGetAll,
            {},
            {
              Authorization: `Bearer ${localStorage.trpos__access_token}`,
            } as AxiosRequestHeaders
          );

          dispatch(setTaskTypes(response.data));

    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
      dispatch(setSelectLoading(false));
    }
  };