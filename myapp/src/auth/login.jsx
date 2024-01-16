import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import './login.css'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log(response); 
  
      if (response.data.message === 'Login successful') {
        console.log("success");
        navigate('/Quiz');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    
    <div className="login-container">
       <img
        src="data:image/png;base64,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" 
        alt="Logo"
        className="logo-image"
      />

      <h2 className="login-header">Login</h2>
      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            autoComplete="email"
            className="form-input"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            autoComplete="current-password"
            className="form-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div>
        <button type="submit" className="form-button">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
