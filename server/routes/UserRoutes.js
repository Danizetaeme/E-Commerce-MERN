import express from 'express';
import { registerUser, loginUser } from '../controllers/UserController.js';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

 // Ruta para obtener el perfil del usuario
// router.get('/profile', getUserProfile);

 // Ruta para actualizar el perfil del usuario
// router.put('/profile', updateUserProfile);

export default router;
