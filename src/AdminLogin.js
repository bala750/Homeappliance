import React, { useState } from 'react';
import './adminLogin.css';

const AdminLogin = () => {
  const [adminLoginId, setAdminLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform admin login logic or authentication here
    console.log('Admin Login ID:', adminLoginId);
    console.log('Password:', password);
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="adminLoginId">Admin Login ID:</label>
          <input
            type="text"
            id="adminLoginId"
            value={adminLoginId}
            onChange={(event) => setAdminLoginId(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
