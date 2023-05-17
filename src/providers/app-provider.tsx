import React, { PropsWithChildren } from 'react';
// Store Provider
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// AuthProvider
import { AuthProvider } from './auth-provider';
// Store
import store from '../store/store';

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <StoreProvider store={store}>
      <Router>{children}</Router>
    </StoreProvider>
  </AuthProvider>
);
