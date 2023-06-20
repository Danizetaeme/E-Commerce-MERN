// export const getAdminPanel = (req, res) => {
//     // Lógica para renderizar la vista del panel de administrador
//     res.send('Este es mi Admin Panel');
//   };
  


import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';

const adminBro = new AdminBro({
  // Configuración de AdminBro (puedes agregar opciones aquí si es necesario)
});

const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

export const getAdminPanel = (req, res) => {
  res.redirect('/admin'); // Redirige a la ruta del panel de administración
};

export const adminMiddleware = adminBroRouter; // Exporta el enrutador de AdminBro





