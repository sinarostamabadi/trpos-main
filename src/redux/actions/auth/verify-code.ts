import { api } from "../../../api";
import { AxiosRequestHeaders } from "axios";
import { createData } from "../../../core/http-service";
import { VerifyCode } from "../../../types/verify-code.interface";
import { setSignupStep } from "../../reducers/auth/signup";
import { AppDispatch } from "../../store/store";
import { setButtonLoading } from "../../reducers/button-loading";
import { setShowModal } from "../../reducers/show-modal";
import { setErrors } from "../../reducers/errors";
import { setResendCodeLoading } from "../../reducers/settings/resend-code";
import { setLoginExpireTime, setLoginStep } from "../../reducers/auth/login";
import { Navigate } from "react-router-dom";

type ActionType = "signup" | "login" | "forgot-password" | "change-phone";
type VerifyType = "GSM" | "email";

export const verifyCode =
  (data: VerifyCode, actionType: ActionType, verifyType: VerifyType) =>
  async (dispatch: AppDispatch) => {
    if (actionType == "login") {
      dispatch(setShowModal({ isShow: true, type: "success" }));
    } else {
      dispatch(setButtonLoading(true));
    }

    try {
      const response: any = await createData(api.AuthApi.verifyCode, data, {
        Authorization: `Bearer ${localStorage.trpos__token}`,
      } as AxiosRequestHeaders);

      if (response?.httpStatusCode == 200) {
        if (actionType == "signup") {
          verifyType == "GSM" && dispatch(setSignupStep(2));
          if (verifyType == "email") {
            dispatch(setShowModal({ isShow: true, type: "success" }));
            localStorage.trpos__token = response.data?.accessTokenDto?.token;
          }
        }

        if (actionType == "login") {
          Navigate({ to: "/dashboard" });
          localStorage.removeItem("trpos__token");
          localStorage.trpos__access_token =
            response.data?.accessTokenDto?.token;
          localStorage.trpos__user_info = JSON.stringify(
            response.data?.userInfo
          );
          localStorage.trpos__user_type = response.data?.userInfo.userType;
          dispatch(
            setLoginExpireTime(response.data?.accessTokenDto?.expiration)
          );
          dispatch(setLoginStep(0));
        }
      }
    } catch (error: any) {
      dispatch(setErrors(error?.message));
      dispatch(setShowModal({ isShow: true, type: "error" }));
      console.log(error);
    } finally {
      if (actionType == "login") {
        dispatch(setShowModal({ isShow: false, type: "success" }));
      } else {
        dispatch(setButtonLoading(true));
      }
    }
  };

export const resendCode = () => async (dispatch: AppDispatch) => {
  dispatch(setResendCodeLoading(true));
  try {
    await createData(
      api.AuthApi.resendCode,
      {
        methodName: "corporateresendcode",
      },
      {
        Authorization: `Bearer ${localStorage.trpos__token}`,
      } as AxiosRequestHeaders
    );
  } catch (error: any) {
    dispatch(setErrors(error?.message));
    dispatch(setShowModal({ isShow: true, type: "error" }));
    console.log(error);
  } finally {
    dispatch(setResendCodeLoading(false));
  }
};
