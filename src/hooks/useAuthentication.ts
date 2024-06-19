import { useContext, useState } from "react";
import { AxiosError } from "axios";
import {
  ConfirmFormValues,
  LoginFormValues,
  SignUpFormValues,
} from "../types/formTypes";
import axiosInstance from "../configs/axiosConfig";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../types/userTypes";

const ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;

interface UseLoginReturn {
  login: (values: LoginFormValues) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

interface ErrorResponse {
  message: string;
}

export const useLogin = (): UseLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: loginUser } = useContext(AuthContext);

  const login = async (values: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(`${ENDPOINT}/login`, values);
      const username = response.data.data.idToken.payload.preferred_username;
      const email = response.data.data.idToken.payload.email;
      const user: User = { username, email };
      const authToken = response.data.data.accessToken.jwtToken;
      loginUser(user, authToken);
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      console.error("Error logging in", err);
      setError(err.response?.data?.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (values: SignUpFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(`${ENDPOINT}/register`, values);
      console.log("Sign up successful", response.data);
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      console.error("Error signing up", err);
      setError(
        err.response?.data?.message || "An error occurred during sign up"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const confirmSignUp = async (
    values: ConfirmFormValues,
    switchState: () => void
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(
        `${ENDPOINT}/confirm-signup`,
        values
      );
      console.log("User confirmed successfully", response.data);
      switchState();
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      console.error("Error confirming user", err);
      setError(
        err.response?.data?.message || "An error occurred during confirmation"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, confirmSignUp, isLoading, error };
};
