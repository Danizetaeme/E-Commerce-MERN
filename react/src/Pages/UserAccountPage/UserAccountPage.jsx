import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@material-ui/core';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { getDron } from '../../Context/UserProvider';
import './UserAccount.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';



export const UserAccountPage = () => {
  const {UserAccount, setUserAccount} = useContext(getDron)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '*********',
  });
  
  const {logout} = useContext(AuthContext)
  const [editing, setEditing] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    // Lógica para guardar los cambios del perfil del usuario
  };

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña del usuario
    console.log('New Password:', newPassword);
    setNewPassword('');
  };

  const handleDeleteAccount = () => {
    // Lógica para eliminar la cuenta del usuario
    console.log('Account deleted');
  };


  const handleLogout = () => {
    setUserAccount('');
    localStorage.removeItem('UserAccount');
    navigate('/') // Elimina el valor de UserAccount en el almacenamiento local
    logout()
  };


  // const handleLogout = () => {
  //   setUserAccount(''); // Elimina el valor de UserAccount para cerrar sesión
  //   navigate('/')
  // };


  return (
    <div>
      <Header />

      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Paper elevation={3} style={{ padding: '2rem' }}>     
          <Typography variant="h4" gutterBottom>
            Bienvenido a tu cuenta, {UserAccount}
          </Typography>          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label={UserAccount}
                name="name"
                value={user.name}
                onChange={handleChange}
                fullWidth
                disabled={!editing}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                fullWidth
                disabled={!editing}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Contraseña"
                name="password"
                value={user.password}
                onChange={handleChange}
                fullWidth
                disabled={!editing}
              />
            </Grid>

            {editing && (
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nueva contraseña"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
            )}
          </Grid>

          {editing ? (
            <div style={{ marginTop: '2rem' }}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Guardar
              </Button>
            </div>
          ) : (
            <div style={{ marginTop: '2rem' }}>
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Editar perfil
              </Button>

              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: '1rem' }}
                onClick={handleDeleteAccount}
              >
                Borrar cuenta
              </Button>
            </div>
          )}

          {!editing && (
            <div style={{ marginTop: '2rem' }}>
              <Typography variant="h6" gutterBottom>
                Contraseña
              </Typography>

              <TextField label="Contraseña actual" type="password" fullWidth />

              <TextField label="Nueva contraseña" type="password" fullWidth />

              <div style={{ marginTop: '1rem' }}>
                <Button variant="contained" color="primary" onClick={handleChangePassword}>
                  Cambiar contraseña
                </Button>

                <Button 
                variant="contained"
                color="secondary"
                style={{ marginLeft: '1rem' }}
                onClick= {handleLogout}
              >Cerrar sesión
              </Button>

              </div>
            </div>
          )}
        </Paper>
      </Container>
            <br />
      <Footer />
    </div>
  );
};




