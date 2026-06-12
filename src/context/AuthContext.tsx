import React, {createContext} from "react";
import {type User} from 'firebase/auth';
import useAuth from "../hooks/useAuth.ts";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: async() => false,
    logout: async () => {},
});

//provider component
function AuthProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const value = useAuth();
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};
export {type AuthContextType};