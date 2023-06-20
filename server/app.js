// import express from "express"
// import cors from "cors"
// //importamos la conexion a la DB //
// import db from "./database/db.js"
// //importados el enrutador
// import dronRoutes from './routes/routes.js'
// import adminRoutes from './routes/adminRoutes.js';

// const app = express()


// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use('/drons', dronRoutes)
// app.use(adminRoutes); // Agrega las rutas del panel de administrador

// app.listen(8000, () => {
//     console.log('Server UP running in http://localhost:8000/')
// })





import express from "express";
import cors from "cors";
import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';
import mongoose from 'mongoose';
import AdminBroExpress from 'admin-bro-expressjs';
import db from "./database/db.js";
import DronRoutes from './routes/DronRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import UserRoutes from './routes/UserRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/drons', DronRoutes);
app.use('/user', UserRoutes);

// Configura la conexión a la base de datos de MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MernDrones', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa a la base de datos de MongoDB');
}).catch((err) => {
  console.error('Error al conectar a la base de datos de MongoDB:', err);
});

// Registra el adaptador de Mongoose para AdminBro
AdminBro.registerAdapter(AdminBroMongoose);

// Crea una instancia de AdminBro
const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
});

// Configura Express para utilizar AdminBro
const buildAdminRouter = AdminBroExpress.buildRouter;
const router = buildAdminRouter(adminBro);
app.use(adminBro.options.rootPath, router);
app.use(adminRoutes); // Agrega las rutas del panel de administrador

app.listen(8000, () => {
  console.log('Server UP running in http://localhost:8000/');
});




