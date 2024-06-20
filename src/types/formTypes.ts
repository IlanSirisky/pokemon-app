export interface LoginFormValues {
  username: string;
  password: string;
}

export interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ConfirmFormValues {
  username: string;
  code: string;
}
