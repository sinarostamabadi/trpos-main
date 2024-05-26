import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import {
  setContractInfo,
  setContractLoading,
} from "../../reducers/settings/contract";

export const getContract = (id: string) => async (dispatch: any) => {
  dispatch(setContractLoading(true));
  try {
    const response = await createData(api.settingsApi.contract, { id: id });
    dispatch(setContractInfo(response));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setContractLoading(false));
  }
};
