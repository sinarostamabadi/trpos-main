import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { setUserInfo } from "../../reducers/settings/user-info";
import { AppDispatch } from "../../store/store";
import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { setCompanyApplicationStep } from "../../reducers/settings/company-application";

export const getUserInfo =
  () => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(api.settingsApi.getuserInfo , {} , {
        Authorization:`Bearer ${localStorage.trpos__access_token}`
      } as AxiosRequestHeaders);
      dispatch(setUserInfo(response.data));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };