import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { setUserCustomerInfo , setLoading } from "../../reducers/settings/user-customer";
import { AppDispatch } from "../../store/store";
import { AxiosRequestHeaders, AxiosResponse } from "axios";

export const getAllUserCustomer =
  () => async (dispatch: AppDispatch) => {
    dispatch(setButtonLoading(true));
    try {
      const response: AxiosResponse = await createData(api.settingsApi.getAllUserCustomer , {} , {
        Authorization:`Bearer ${localStorage.trpos__access_token}`
      } as AxiosRequestHeaders);

      dispatch(setUserCustomerInfo(response.data));

    } catch (error: any) {
      error.statusCode == 400 && dispatch(setErrors(error.message));
      console.log(error);
    } finally {
      dispatch(setButtonLoading(false));
    }
  };