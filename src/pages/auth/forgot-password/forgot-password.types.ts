export interface ForgotPasswordInputs {
  phoneOrEmail: string;
  customerNo: string;
  lang?: string;
  phoneCountry?: string;
  phoneNumber: string;
  email: string;
  ip?: string;
}

export interface SetPasswordInputs {
  password: string;
  confirmPassword: string;
  passwordEndDate?: number;
  ip: string;
}
