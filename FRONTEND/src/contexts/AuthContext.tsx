import { createContext, useContext, useState } from "react";

interface AuthProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProps | null>(null);

export interface User {
  username: string;
  level: number;
  userId: number;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(user: User) {
    setUser(user);
    setIsAuthenticated(true);
  }

  function logout() {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const value = useContext(AuthContext);

  if (!value) throw new Error("context is used outside its provider!");

  return value;
}

export { AuthProvider, useAuth };
