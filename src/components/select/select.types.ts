export type SelectProps = {
  className?: string;
  options?: { [key: string]: string }[];
  placeholder: string;
  isError: boolean;
  register?: any;
  error?: string;
  touched?: boolean;
  size?:"large" | "middle" | "small"
};
