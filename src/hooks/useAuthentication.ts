import { useState } from "react";
import axios, { AxiosError } from "axios";
import { LoginFormValues, SignUpFormValues } from "../types/formTypes";
import { useNavigate } from "react-router";

const URL = import.meta.env.VITE_AUTH_URL;

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
  const navigate = useNavigate();

  const login = async (values: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${URL}/login`, values);
      console.log("Login successful", response.data);
      window.alert("Login successful");
      navigate("/all-pokemons");
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
      const response = await axios.post(`${URL}/register`, values);
      console.log("Sign up successful", response.data);
      window.alert("Sign up successful");
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

  return { signUp, isLoading, error };
};
