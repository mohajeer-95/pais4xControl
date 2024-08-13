import { useState } from 'react';
import AppRouter from './routes/Router';
import { AuthProvider } from './routes/AuthContext'; // Adjust path as needed

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthProvider>
      <div className="dark">
        <AppRouter
          isAuthenticated={isAuthenticated}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </div>
    </AuthProvider>
  );
};

export default App;
