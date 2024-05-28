import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";
import { setForgetPasswordInfo , setForgetPasswordStep , setLoading } from "../../reducers/auth/forget-password";
import { AppDispatch } from "../../store/store";
import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { setShowModal } from "../../reducers/show-modal";

export const ForgetPasswordRequest = (data: {}) => async (dispatch: AppDispatch) => {
  dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(api.AuthApi.forgotPassword , data);
    dispatch(setForgetPasswordInfo(response.data));
    localStorage.trpos__token = response.data.token;
    dispatch(setForgetPasswordStep(2));
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};

export const ResetPassword = (data: {}) => async (dispatch: AppDispatch) => {
  dispatch(setButtonLoading(true));
  try {
    const response: AxiosResponse = await createData(api.AuthApi.resetPassword , data , {
      Authorization:`Bearer ${localStorage.trpos__token}`
    } as AxiosRequestHeaders);
    dispatch(setForgetPasswordInfo(response.data?.userInfo));
    dispatch(setShowModal({isShow:true , type:"passwordChangeSuccess"}));
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    dispatch(setShowModal({isShow:true , type:"passwordChangeSuccess"}));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};