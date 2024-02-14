import React from 'react';
import { useParams } from 'react-router-dom';
import { pokemonUtils } from "./PokeApi";
import { useEffect, useState } from 'react';

const Detalle = () => {
  const { id } = useParams();
  const [pokemonDetalle, setPokemonDetalle] = useState({});
  useEffect(() => {
    pokemonUtils.detallePorId(id)
    .then((data) => {
      setPokemonDetalle(data);
      console.log(data);
    })
    .catch(error => console.error("Error fetching pokemon details:", error));
  }, [id]);
  
  
  return (
    <div className="bg-dark text-light p-4 rounded">
      <div className="d-flex justify-content-start mb-4">
        <button className="btn btn-primary" style={{ cursor: 'pointer' }}>Volver</button>
      </div>
      <div className="d-flex flex-column align-items-center mb-4">
        <h2>{pokemonDetalle.name}</h2>
        <img src={pokemonDetalle.sprites?.other["official-artwork"].front_default} className="img-fluid rounded-circle" style={{ maxWidth: '200px' }} alt={pokemonDetalle.species?.name} />
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div className="bg-secondary p-3 rounded" style={{ width: '45%' }}>
          <p><b>Posición en la Pokédex:</b> {pokemonDetalle.id}</p>
          <p><b>Peso:</b> {pokemonDetalle.weight}</p>
        </div>
        <div className="bg-secondary p-3 rounded" style={{ width: '45%' }}>
          <h4>Stats</h4>
          <ul className='d-flex flex-wrap'>
            {pokemonDetalle.stats?.map((stat, index) => (
              <li key={index} className='flex-grow-1'>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div className="bg-secondary p-3 rounded" style={{ width: '45%' }}>
          <h4>Tipos</h4>
          <ul className='d-flex flex-wrap'>
            {pokemonDetalle.types?.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
        <div className="bg-secondary p-3 rounded" style={{ width: '45%' }}>
          <h4>Habilidades</h4>
          <ul className='d-flex flex-wrap'>
            {pokemonDetalle.abilities?.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detalle;