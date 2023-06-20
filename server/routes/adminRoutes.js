// import express from 'express';
// import { getAdminPanel } from '../controllers/adminController.js';
// import AdminBro from 'admin-bro';
// import AdminBroExpress from '@admin-bro/express';

// const adminBro = new AdminBro({
//   // Configuración de AdminBro (puedes agregar opciones aquí si es necesario)
// });

// const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

// const router = express.Router();

// router.use('/admin', adminBroRouter); // Utilizar el enrutador de AdminBro en la ruta "/admin"

// router.get('/admin', getAdminPanel);

// export default router;


//_____________________________________//


import express from 'express';
import { getAdminPanel, adminMiddleware } from '../controllers/adminController.js';
import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';

const adminBro = new AdminBro({
  // Configuración de AdminBro (puedes agregar opciones aquí si es necesario)
});

const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

const router = express.Router();

router.use('/admin', adminMiddleware); // Utilizar el enrutador de AdminBro en la ruta "/admin"

router.get('/', getAdminPanel); // Cambiar la ruta de getAdminPanel a "/"

export default router;



