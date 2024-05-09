import { Dispatch, SetStateAction } from "react";

export type LoginInputs = {
  phoneNumber: string;
  password: string;
};

export type dataState = {
  step: 1 | 2;
  payload: LoginInputs;
};

export type dataStateSetter = Dispatch<SetStateAction<dataState>>;
