import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (token) => {
        localStorage.setItem('token', token);

        // Set authentication status to true
        setIsAuthenticated(true);
        // Store authentication token or any relevant info (e.g., localStorage)
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
        // Set authentication status to false
        setIsAuthenticated(false);
        // Remove authentication token or relevant info
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
    };

    // Check authentication status on initial load
    React.useEffect(() => {
        // const token = localStorage.getItem('isAuthenticated');
        if (1) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);
