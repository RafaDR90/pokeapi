import { useState } from "react";
import React from "react";
import { pokemonUtils } from "./PokeApi";
import { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';



const Pokemons = () => {
    const [contador, setContador]= useState(0)
    const [pokemonsDetalle, setPokemonsDetalle] = useState([]);
    useEffect(() => {
      setContador(8)
      pokemonUtils.fetchOchoPokemons(0)
          .then((data) => {
              const promises = data.map(pokemon => pokemonUtils.obtenerDetalle(pokemon.url));
              Promise.all(promises)
                  .then(details => {
                      setPokemonsDetalle(details);
                  })
                  .catch(error => console.error("Error fetching pokemon details:", error));
          })
          .catch(error => console.error("Error fetching pokemons:", error));
  }, []);



  const cargarMasPokemons = () => {
    pokemonUtils.fetchOchoPokemons(contador)
        .then((data) => {
            const promises = data.map(pokemon => pokemonUtils.obtenerDetalle(pokemon.url));
            Promise.all(promises)
                .then(details => {
                    setPokemonsDetalle(prevPokemonsDetalle => [...prevPokemonsDetalle, ...details]);
                })
                .catch(error => console.error("Error fetching pokemon details:", error));
            setContador(prevContador => prevContador + 8);
        })
        .catch(error => console.error("Error fetching pokemons:", error));
    };


  return (
    <div className="container">
        <h2 className="text-light">Pokemons</h2>
        <div className="row">
            {pokemonsDetalle.map((pokemon, index) => (
                <div key={index} className="col-md-2 mb-2">
                    <div className=" bg-dark">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} className="card-img-top" alt={pokemon.species.name} />
                        <h5 className="card-title text-light">{pokemon.species.name}</h5>
                        <Link className="btn btn-light m-2" to={{ pathname: '/detalle/'+pokemon.id }}>Ver detalle</Link>
                    </div>
                </div>
            ))}
        </div>
        <div className="row">
            <div className="col-md-12">
                <button className="btn btn-warning" onClick={cargarMasPokemons} >Mostrar más</button>
            </div>
        </div>
    </div>
);
};
  
  export default Pokemons;
  