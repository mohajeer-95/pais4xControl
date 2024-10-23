import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../src/routes/AuthContext'; // Adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Spinner } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true)
    console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', isAuthenticated);

    if (isAuthenticated) {
      console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', isAuthenticated);
      navigate('/starter'); // Redirect to a protected route or home page
      setLoading(false)
    } else {
      checkToken()
    }
  }, [])

  const checkToken = () => {
    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');

    const authToken = localStorage.getItem('isAuthenticated');
    const token = localStorage.getItem('token');
    console.log('token in Login',token);
    if (token) {
      setLoading(false)
      navigate('/starter');
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://paid4x.com/broker/public/api/admin/login", requestOptions);

      const result = await response.json();

      if (result.token) { // Adjust based on your API's response structure
        login(result.token); // Update authentication status
        navigate('/starter'); // Redirect to a protected route or home page 
      } else {
        setError('Login failed: Invalid email or password');
      }
    } catch (error) {
      setError(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      {loading ? <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center">Admin Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
          </form>
        </div>
      </div>
        :
        <div style={styles.loaderContainer}>
          <Spinner color="primary" />
          <p>Loading...</p>
        </div>
      }
    </div>
  );
};
const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
export default Login;
