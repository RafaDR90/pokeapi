import React from 'react';

const Detalle = (props) => {
  // Verifica si props.location está definido antes de intentar acceder a props.location.state
  if (!props.location || !props.location.state) {
    console.log('algo falla')
    return null; // Otra opción es mostrar un mensaje de error o redirigir a una página de error
  }

  // Accede a props.location.state.pokemon
  const pokemon = props.location.state.pokemon;

  // Resto del código del componente Detalle
};

export default Detalle;
  