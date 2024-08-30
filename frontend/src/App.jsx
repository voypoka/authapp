import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button onClick={toggleForm}>
        {isLogin ? 'Go to Register' : 'Go to Login'}
      </button>
    </div>
  );
}

export default App;
