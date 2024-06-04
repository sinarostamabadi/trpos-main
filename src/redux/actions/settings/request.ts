import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";
import { setButtonLoading } from "../../reducers/button-loading";
import { AppDispatch } from "../../store/store";
import { createData } from "../../../core/http-service";
import { api } from "../../../api";
import { setErrors } from "../../reducers/errors";
import { setRequestInfo } from "../../reducers/settings/request";
import { setCompanyApplicationError, setCompanyApplicationStep , setIdentityTax , setCompanyInformationInfo } from "../../reducers/settings/company-application";
import { BASE_URL } from './../../../configs/global';

export const getFilter = () => async (dispatch: AppDispatch) => {
  dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(
      api.settingsApi.getFilterRequest,
      {}
    );
    dispatch(setRequestInfo(response.data));
    console.log(response);
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};

export const controlBeforeRegistration =
  (data : {}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(
        api.settingsApi.controlBeforeRegistration,
        data,
        {
          Authorization: `Bearer ${localStorage.trpos__access_token}`,
        } as AxiosRequestHeaders
      );
      dispatch(setIdentityTax(data));
      dispatch(setCompanyInformationInfo(response.data));
      dispatch(setCompanyApplicationStep(2));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setCompanyApplicationError(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };

  export const createCorporateApp =
  (data : {}) => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await axios.post(
        BASE_URL+api.settingsApi.corporateApp,
        data,
        {
          headers : {
            "Authorization": `Bearer ${localStorage.trpos__access_token}`,
            "Content-Type":"multipart/form-data"
          }
        }
      );
      console.log(response.data);
      dispatch(setCompanyApplicationStep(5));
    } catch (error: any) {
      error.statusCode == 400 && dispatch(setCompanyApplicationError(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };