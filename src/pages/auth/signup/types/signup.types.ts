export interface SignupInput {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordRepeat: string;
  ip?: string;
  lang: string;
  checkbox_rule_1: boolean;
  checkbox_rule_2: boolean;
  checkbox_rule_3: boolean;
}
