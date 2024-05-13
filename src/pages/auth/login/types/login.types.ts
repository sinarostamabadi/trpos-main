import { Dispatch, SetStateAction } from "react";

export interface LoginInputs {
  phoneOrEmail: string;
  lang?: string;
  phoneCountry?: string;
  phoneNumber?: string;
  password: string;
  email: string;
  ip?: string;
  version?: string;
}

export type dataState = {
  step: 1 | 2;
  payload: LoginInputs;
};

export type dataStateSetter = Dispatch<SetStateAction<dataState>>;
