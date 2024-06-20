import { IformFields } from "../components/Form/Form";
import {
  ConfirmFormValues,
  LoginFormValues,
  SignUpFormValues,
} from "../types/formTypes";

export const loginInitialValues: LoginFormValues = {
  username: "",
  password: "",
};

export const signUpInitialValues: SignUpFormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const confirmInitialValues: ConfirmFormValues = {
  username: "",
  code: "",
};

export const loginFields: IformFields[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const signUpFields: IformFields[] = [
  {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Enter a username",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter an email",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter a password",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
  },
];

export const confirmFields: IformFields[] = [
  {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Enter your username",
    required: true,
  },
  {
    label: "Confirmation Code",
    name: "code",
    type: "text",
    placeholder: "Enter the confirmation code",
    required: true,
  },
];
