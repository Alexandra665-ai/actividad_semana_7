
const db = require('../db/conexion');

class AuthController {

  
  loginVista(req, res) {
    res.render('login', { error: null }); 
  }

  // Procesa el formulario de login
  login(req, res) {
    const { email, clave } = req.body; // Obtenemos email y clave del formulario

    // Registramos en consola que alguien intenta ingresar
    console.log(`[${new Date().toLocaleString()}] Intento de login: ${email}`);

   
    const sql = `
      SELECT usuarios.*, roles.nombre AS rol_nombre
      FROM usuarios
      JOIN roles ON usuarios.rol_id = roles.id
      WHERE email = ? AND clave = ?
    `;

    
    db.query(sql, [email, clave], (err, resultados) => {
      if (err) throw err; 

      if (resultados.length > 0) {
        // Si encontramos el usuario, guardamos sus datos en la sesión
        const usuario = resultados[0];
        req.session.usuario = {
          rut: usuario.rut,
          nombre: usuario.nombre,
          email: usuario.email,
          rol: usuario.rol_nombre
        };

       
        console.log(`[${new Date().toLocaleString()}] Login exitoso: ${email} (Rol: ${usuario.rol_nombre})`);

        res.redirect('/usuarios'); // Redirigimos a la zona privada
      } else {
        
        console.log(`[${new Date().toLocaleString()}] Login fallido: ${email} - Credenciales incorrectas`);
        res.render('login', { error: 'Email o clave incorrectos' });
      }
    });
  }

 
  logout(req, res) {
    const email = req.session.usuario?.email || 'desconocido';
    req.session.destroy(() => {
      // Registramos en consola que el usuario cerró sesión
      console.log(`[${new Date().toLocaleString()}] Logout: ${email}`);
      res.redirect('/'); // Volvemos al login
    });
  }
}

module.exports = new AuthController(); 