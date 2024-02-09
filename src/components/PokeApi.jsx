const fetchOchoPokemons = async (offset) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${offset}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      return [];
    }
  };
  
  const obtenerDetalle = (url) => {
    try {
      return fetch(url)
      .then((response) => response.json())
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      return null
    }
  };
  
  // Exporta un objeto con todas las funciones
  export const pokemonUtils = {
    fetchOchoPokemons,
    obtenerDetalle,
  };
