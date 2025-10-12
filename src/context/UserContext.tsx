import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppUser } from "../types"; // Import AppUser type

export const UserContext = createContext<{
  user: AppUser;
  signIn: (name: string, email: string, phone: string) => void;
  signOut: () => void;
}>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AppUser>(null); // Initial state is null

  const signIn = (name: string, email: string, phone: string) => {
    // In a real app, this would involve API calls and token storage.
    const newUser: AppUser = {
      id: Date.now(), // Simple mock ID
      name,
      email,
      phone,
    };
    setUser(newUser);
  };

  const signOut = () => {
    // In a real app, this would involve clearing tokens.
    setUser(null);
  };

  return <UserContext.Provider value={{ user, signIn, signOut }}>{children}</UserContext.Provider>;
};