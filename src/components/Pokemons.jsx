import { useState } from "react";
import React from "react";
import { pokemonUtils } from "./PokeApi";
import { useEffect } from "react";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        pokemonUtils.fetchOchoPokemons(0)
        .then((data) => {
            console.log(data);
            setPokemons(data)
        });
      }, []);

    return (
      <div className="text-light">
        <h2 >Pokemons</h2>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    ); 
  };
  
  export default Pokemons;
  