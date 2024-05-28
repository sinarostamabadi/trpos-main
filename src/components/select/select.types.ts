import { ReactNode } from "react";

export type SelectProps = {
  className?: string;
  options?: { [key: string]: string | number | ReactNode }[];
  placeholder?: string;
  isError?: boolean;
  register?: any;
  error?: string;
  touched?: boolean;
  size?: "large" | "middle" | "small";
  isSimple?: boolean;
  label?: string;
  name:string,
  control:any;
};