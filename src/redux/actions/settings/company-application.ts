import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import {
  setCompanyInformationInfo,
  setAuthorizeInformation,
  setCompanyApplicationStep,
} from "../../reducers/settings/company-application";
import { AppDispatch, RootState } from "../../store/store";
import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { getUserInfo } from "./user-info";

export const controlBeforeRegistration =
  () => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(
        api.settingsApi.controlBeforeRegistration,
        {},
        {
          Authorization: `Bearer ${localStorage.trpos__access_token}`,
        } as AxiosRequestHeaders
      );
      dispatch(setCompanyInformationInfo(response.data));
      dispatch(setCompanyApplicationStep(2));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      dispatch(setCompanyApplicationStep(2));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };

export const setAuthorizationInformation =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setButtonLoading(true));
    try {
      await dispatch(getUserInfo());

      dispatch(setAuthorizeInformation(getState().userInfoSlice.info));
      dispatch(setCompanyApplicationStep(3));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      dispatch(setCompanyApplicationStep(2));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };
