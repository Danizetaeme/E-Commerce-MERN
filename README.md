# BIENVENIDO A DroneTech 😎🦾🛸

## DronTech es una Página Web de Venta de Drones
¡Bienvenido al proyecto e-commerce DronTech! Este repositorio contiene el código fuente para un sitio web de comercio electrónico que se especializa en la venta de drones. El proyecto está construido utilizando el stack MERN (MongoDB, Express, React y Node.js) y se divide en dos partes principales: el frontend y el backend.


---

## Características 

 🛒**Carrito de Compra:** Agrega drones a tu carrito de compras y gestiona las cantidades

❤️**Lista de Favoritos:** Los usuarios pueden agregar drones a una lista de favoritos para guardar y acceder fácilmente a aquellos productos que les interesan. Esto les permite realizar un seguimiento de los drones que desean comprar en el futuro o comparar diferentes modelos.

📋**Formulario de Contacto:** La página web incluye un formulario de contacto que permite a los usuarios comunicarse con el equipo de atención al cliente o hacer consultas sobre productos específicos. Los usuarios pueden completar el formulario y enviarlo directamente desde la página.

👀 **Filtro por Categoría:** Los usuarios pueden filtrar los drones por categoría, lo que les permite navegar y encontrar rápidamente los productos que se ajustan a sus necesidades y preferencias.

🔍**Buscador de Productos:** La página web cuenta con un buscador que permite a los usuarios realizar búsquedas de productos específicos. Además, si un producto no se encuentra disponible, se muestra un mensaje indicando al cliente que el producto no está disponible en ese momento.

⚡**Página de Detalle de Producto:** En la que se proporciona información detallada, características técnicas, imágenes y precios para que los usuarios puedan ver toda la información de un Dron antes de comprarlo.

👤**Autenticación de usuarios:** Regístrate, inicia sesión y administra tu perfil de usuario.

🤖**Panel de administración:** Accede a un panel de administración para gestionar productos, pedidos y usuarios (solo para administradores).

---

## Tecnologías Utilizadas

**FRONTEND:** El frontend del proyecto se construyó utilizando React, aprovechando diversas bibliotecas y herramientas como Material-UI, Axios, React Redux, y React Router Dom, entre otras.

**BACKEND:** El backend está desarrollado con Node.js y Express, utilizando MongoDB como base de datos a través de la biblioteca Mongoose. También se implementó la autenticación de usuarios utilizando JSON Web Tokens (JWT) y la gestión del carrito de compras utilizando cookies y sesiones.

**OTROS:** El proyecto hace uso de otras bibliotecas y herramientas como Admin Bro para el panel de administración, bcrypt para el cifrado de contraseñas, y Multer para la carga de imágenes de productos.

---

## Dependencias  

**BACKEND**
- @admin-bro/express: "^3.1.0"
- @admin-bro/mongoose: "^1.1.0"
- admin-bro: "^4.0.1"
- admin-bro-expressjs: "^2.1.1"
- admin-bro-mongoose: "^0.5.2"
- bcrypt: "^5.1.0"
- cors: "^2.8.5"
- dotenv: "^16.1.4"
- express: "^4.18.2"
- express-formidable: "^1.2.0"
- express-session: "^1.17.3"
- fs-extra: "^11.1.1"
- http-proxy-middleware: "^2.0.6"
- jsonwebtoken: "^9.0.0"
- mongodb: "^5.6.0"
- mongoose: "^7.2.3"
- multer: "^1.4.5-lts.1"
- tslib: "^2.5.3"

**FRONTEND**
- @emotion/react: "^11.11.1"
- @emotion/style: "^0.8.0"
- @emotion/styled: "^11.11.0"
- @fontsource/roboto: "^5.0.1"
- @material-ui/core: "^4.12.4"
- @mui/icons-material: "^5.11.16"
- @mui/material: "^5.13.5"
- @mui/styles: "^5.13.2"
- @testing-library/jest-dom: "^5.16.5"
- @testing-library/react: "^13.4.0"
- @testing-library/user-event: "^13.5.0"
- axios: "^1.4.0"
- react: "^18.2.0"
- react-dom: "^18.2.0"
- react-icons: "^4.8.0"
- react-redux: "^8.0.5"
- react-router-dom: "^6.13.0"
- react-slick: "^0.29.0"
- react-toastify: "^9.1.3"
- redux: "^4.2.1"
- slick-carousel: "^1.8.1"
- web-vitals: "^2.1.4"

---
## Instalación
1. Clona este repositorio en tu ordenador
2. Configura el backend:
   - Navega al directorio del backend (cd server)
   - Instala las dependencias (npm install)
   - Inicia el servidor de desarrollo. (npm start o nodemon app)
3. Configura el frontend
   - Navega al directorio del front (cd react)
   - Instala las dependencias (npm install)
   - Inicia la app de React (npm start)   
---
## Estructura del proyecto.

El repositorio tiene la siguiente estructura de directorios:

   - El directorio "server" contiene todos los archivos relacionados con el servidor backend, incluyendo los controladores, modelos de base de datos, rutas API y archivos de configuración.
   - El directorio "react" contiene los archivos del frontend de la aplicación React, incluyendo componentes, estilos y archivos de configuración.

---

## Para inicializar el proyecto

- Levantar Mongod.exe desde la terminal
- Levantar Mongosh.exe desde la terminal
- Inicializar MongoDB
- Introducir el comando "nodemon app" en el lado del server para conectarse con la BD
- npm start desde el lado del front para levantar la aplicación en el servidor 3000

## Equipo de Desarrolladores 

- Adriana Rodriguez
- Sebastian Benavides 
- Daniel Zafra 
- Erika Linares 
- Alejandro Mitjans
- Lucia Mutua