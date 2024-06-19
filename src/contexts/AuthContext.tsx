import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/userTypes";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { PagePaths } from "../constants/navBar";

interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { saveItem, getItem, deleteItem } = useSessionStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = getItem("user");
    const token = getItem("accessToken");
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (user: User, token: string) => {
    setUser(user);
    saveItem("accessToken", token);
    saveItem("user", JSON.stringify(user));
    navigate(PagePaths.ALL_POKEMONS);
  };

  const logout = () => {
    setUser(null);
    deleteItem("accessToken");
    deleteItem("user");
    navigate(PagePaths.LOGIN);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
