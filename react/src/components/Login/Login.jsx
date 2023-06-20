import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { getDron } from '../../Context/UserProvider';





export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setUserAccount} = useContext(getDron);


  const handleLogin = async (e) => {
    e.preventDefault();

    // Enviar solicitud de inicio de sesión al backend
    const response = await fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      setUserAccount(username)
      // Guardar el token en el almacenamiento local (localStorage) o en una cookie, según tus necesidades
      localStorage.setItem('token', token);
      // Mostrar mensaje de éxito y redireccionar a la página de inicio o a otra página protegida
      toast.success('Has iniciado sesión correctamente');
      setTimeout(() => {
        navigate('/UserAccount');
      }, 2000);
    } else {
      // Mostrar mensaje de error si la autenticación falla
      toast.error('Error de autenticación');
      console.error('Error de autenticación');
    }
  };

  return (
    <>
      <Header />
      <div className="register-container">
        <form onSubmit={handleLogin} className="register-form">
          <h2 className="registrate">Inicia sesión</h2>
          <TextField
            type="text"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="btn-registro"
            type="submit"
            variant="contained"
            sx={{
              background: '#FF4000',
              transition: 'background 0.5s ease-in-out',
              '&:hover': {
                background: '#201E1F',
              },
            }}
          >
            Iniciar sesión
          </Button>
          <p>
            ¿Has olvidado la contraseña? <Link to="#"><span>Recupérala</span></Link>
          </p>
        </form>
        <ToastContainer position="top-right" /> {/* Contenedor de notificaciones */}
      </div>
      <Footer />
    </>
  );
}
