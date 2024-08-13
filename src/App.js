import { useRoutes } from 'react-router-dom';
import Themeroutes from './routes/Router';
// import { AuthProvider } from './../src/routes/AuthContext'; // Adjust path as needed

const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
      <div className="dark">{routing}</div>
  );
};

export default App;

//kakkaka