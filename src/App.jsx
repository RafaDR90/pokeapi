import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pokeTitulo from './assets/pokemonTitulo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mt-5 bg-dark p-4">
      <div className="text-center mb-4">
        <img src={pokeTitulo} alt='pokemon' className="img-fluid" />
      </div>
      <h1 className="text-center text-white display-3">Bienvenido a PokeRaf!</h1>
      <p className="text-center text-white lead">Aquí podrás ver detallado cada Pokémon existente y por existir!</p>
      <p className="text-center text-white lead">Además podrás disfrutar de un minijuego junto con tus Pokémon favoritos</p>
      <h3 className="text-center text-white display-5">¡Hazte con todos!</h3>
    </div>
  )
}

export default App
