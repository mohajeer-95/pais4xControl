import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust path as needed

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    console.log('isAuthenticated:::', isAuthenticated);

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
