import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase.config';

interface AuthContextProps {
  loading: boolean;
  user: any;
  error: Error;
  setUser: (user: any) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(null);

export const useUserData = (): AuthContextProps => {
  const userData = useContext(AuthContext);
  return { ...userData };
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setLoading(false);
      setError(e);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setLoading(false);
      setError(e);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (e) {
      setLoading(false);
      setUser(null);
      setError(e);
      console.error(e);
    } finally {
      setUser(null);
      setLoading(false);
    }
  };

  const onAuthUserStateChanged = (user: any) => {
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthUserStateChanged);
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, setUser, signIn, signUp, signOutUser, error }}>
      {children}
    </AuthContext.Provider>
  );
};
