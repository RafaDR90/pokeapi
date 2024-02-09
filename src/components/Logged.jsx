import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase-conf';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Logged = (componente) => {

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

  return isLogged ? <componente/> : <navigate to="/login" />;
};

export default Logged;
