import { api } from "../../../api";
import { createData } from "../../../core/http-service";
import { setContractTypeInfo } from "../../reducers/settings/contract-type";

export const getAllContractTypes = () => async (dispatch: any) => {
  try {
    const response: any = await createData(api.settingsApi.contractTypes, null);
    dispatch(setContractTypeInfo(response.data));
  } catch (error) {
    console.log(error);
  }
};
