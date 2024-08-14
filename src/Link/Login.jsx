import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  function handleClick(){
    const navigate = useNavigate()
    console.log('Fazer Login');
    navigate('/sobre')
  }
  return (
    <div>
      <h1>Página de Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
