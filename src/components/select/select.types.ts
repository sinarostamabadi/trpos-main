export type SelectProps = {
  className?: string;
  options?: { [key: string]: string | number }[];
  placeholder?: string;
  isError?: boolean;
  register?: any;
  error?: string;
  touched?: boolean;
  size?: "large" | "middle" | "small";
  isSimple?:boolean;
  label?:string;
};
