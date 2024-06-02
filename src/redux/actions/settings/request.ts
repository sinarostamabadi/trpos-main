import { AxiosResponse } from "axios";
import { setButtonLoading } from "../../reducers/button-loading";
import { AppDispatch } from "../../store/store";
import { createData } from "../../../core/http-service";
import { api } from "../../../api";
import { setErrors } from "../../reducers/errors";
import { setRequestInfo } from "../../reducers/settings/request";

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
