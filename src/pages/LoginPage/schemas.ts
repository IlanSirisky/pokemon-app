import * as yup from "yup";

// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(
      passwordRules,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
    )
    .required("Required"),
});

export const signUpSchema = yup.object().shape({
  username: yup.string().min(3).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(
      passwordRules,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
    )
    .required("Required"),
});
