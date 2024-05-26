import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setErrors } from "../../reducers/errors";
import { setButtonLoading } from "../../reducers/button-loading";

export const register = (data: {}) => async (dispatch: any) => {
  dispatch(setButtonLoading(true));
  try {
    const response: any = await createData(api.AuthApi.register, data);
    localStorage.trpos__register_token = response.data.token;
  } catch (error: any) {
    error.statusCode == 400 && dispatch(setErrors(error.message));
    console.log(error);
  } finally {
    dispatch(setButtonLoading(false));
  }
};
