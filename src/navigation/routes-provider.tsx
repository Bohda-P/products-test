import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { Login, Products, Cart } from '../pages';
import ProtectedRoute from './protected-route';
import { useUserData } from '../providers';

export const RoutesProvider = () => {
  const { user } = useUserData();
  const isAuthenticated = !!user;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/products"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
};
