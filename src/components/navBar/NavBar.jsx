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
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isLogged ?
        <>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/register">Registro</Link>
        </li>
        </>: null
        }
        {isLogged ? 
        <li>
          <button  onClick={handleLogout}>Cerrar Sesión</button>
        </li>: null
        }
      </ul>
    </nav>
  );
};

export default Navbar;
