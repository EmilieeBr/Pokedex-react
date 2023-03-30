import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [PokemonIndex, setPokemonIndex] = useState(0);

  const pokemon = pokemonList[PokemonIndex];
  return (
    <div>
      <NavBar
        PokemonIndex={PokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
      <p>{PokemonIndex}</p>
      <PokemonCard pokemon={pokemon} pokemonList={pokemonList[0].name} />
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
