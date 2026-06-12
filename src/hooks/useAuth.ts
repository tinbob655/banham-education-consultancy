import {useEffect, useState} from 'react';
import {onAuthStateChanged, signInWithEmailAndPassword, signOut, type User} from 'firebase/auth';
import {auth} from '../firebase.ts';


interface Exports {
    user: User|null;
    loading: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
}

export default function useAuth():Exports {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    //set up an auth listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    async function logout(): Promise<void> {
        try {
            await signOut(auth);
        }
        catch (error) {
            console.error("Error signing out: ", error);
        }
    }

    async function login(email: string, password: string): Promise<boolean> {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        }
        catch (error) {
            console.error("Error logging in: ", error);
            return false;
        }
    }

    return {user, loading, login, logout}
}