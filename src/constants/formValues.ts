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
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter an email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter a password",
  },
];

export const confirmFields: IformFields[] = [
  {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Enter your username",
  },
  {
    label: "Confirmation Code",
    name: "code",
    type: "text",
    placeholder: "Enter the confirmation code",
  },
];
