import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

export function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Enviar solicitud de registro al backend
    const response = await fetch('http://localhost:8000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Registro exitoso, mostrar notificación y redireccionar a la página de login
      toast.success('Registro creado correctamente');
      setTimeout(() => {
        navigate('/login');
      }, 4000); // Esperar 4 segundos antes de redirigir
    } else {
      // Mostrar mensaje de error si el registro falla
      toast.error('Este usuario ya existe');
      console.error('Error al registrar el usuario');
    }
  };

  return (
    <>
    <Header />
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2 className='registrate'>¿Necesitas una cuenta?</h2>
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
          className='btn-registro'
          type="submit"
          variant="contained"
          sx={{
            background: "#FF4000",
            transition: "background 0.5s ease-in-out",
            "&:hover": {
            background: "#201E1F",
            },
          }}
        >
          Registrarse
        </Button>
        <p>¿Ya tienes cuenta? <Link to="/login"><span>Inicia Sesión</span></Link></p>
      </form>
      <ToastContainer position="top-right" /> {/* Contenedor de notificaciones */}
    </div>
    <Footer/>
    </>
  );
}

