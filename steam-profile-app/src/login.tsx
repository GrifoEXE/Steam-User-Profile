import React from 'react';
import './login.css';

const Login = () => {
  const handleLoginWithSteam = () => {
    // Redirecionar o usuário para a página de login da Steam
    window.location.href = 'https://steamcommunity.com/openid/login';
  };

  return (
    <div className="login-container">
      <h2>Entre na sua conta</h2>
      <button onClick={handleLoginWithSteam}>Login com Steam</button>
    </div>
  );
};

export default Login;
