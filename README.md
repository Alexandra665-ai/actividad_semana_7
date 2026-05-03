# Actividad Semana 7 - Seguridad Web


## Objetivo

Implementar una solución simple que incluya autenticación de usuario, manejo de sesión mediante cookies y protección de rutas, utilizando Node.js y Express.

## Tecnologías utilizadas

- Node.js + Express
- EJS (motor de plantillas)
- express-session (manejo de sesiones)
- MySQL2 (conexion a base de datos)
- MySQL Workbench (administracion BD)


## Seguridad implementada

Se utilizó express-session para manejar la sesión del usuario.

La cookie de sesión incluye:

- **httpOnly**: evita que JavaScript acceda a la cookie
- **sameSite**: ayuda a prevenir ataques CSRF
- **secure**: en este caso está en false porque se trabaja en local (sin HTTPS)


## Cómo ejecutar el proyecto

1. Instalar dependencias:
npm install

2. Ejecutar el servidor:
node app.js


3. Abrir en el navegador:
http://localhost:3000


## Usuario de prueba

Email: alexti@gmail.com  
Clave: 1234
