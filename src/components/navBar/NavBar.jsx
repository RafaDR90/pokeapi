import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando react-router-dom para el enrutamiento
import './NavBar.css';
import auth from '../../Firebase-conf';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Navbar = () => {

  const [isLogged, setIsLogged] = React.useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
    return () => {
      unsubscribe();
    }
  },[])

  const handleLogout = () => {
    auth.signOut() // Cierra la sesión del usuario actual
      .then(() => {
        // Cierre de sesión exitoso
        console.log('Se cerró sesión exitosamente.');
        // Puedes redirigir al usuario a una página de inicio de sesión u otra página aquí
      })
      .catch((error) => {
        // Maneja cualquier error que ocurra durante el cierre de sesión
        console.error('Error al cerrar sesión:', error.message);
      });
  };

  return (
    <header className="bg-dark fixed-top" style={{ width: '100vw' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link text-white" to="/pokedex">Pokedex</Link>
                </li>
            {!isLogged ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Registro</Link>
                </li>
              </>
            ) : null}
          </ul>
          {isLogged ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>Cerrar Sesión</button>
          ) : null}
          
        </div>
      </nav>
      <style>
        {`
          .nav-link:hover {
            color: yellow !important; 
          }
        `}
      </style>
    </header>
    
  );
};

export default Navbar;
