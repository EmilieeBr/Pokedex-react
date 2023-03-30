import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";

function App() {
  const [PokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrevious = () => {
    setPokemonIndex(PokemonIndex - 1);
  };

  const handleClickNext = () => {
    setPokemonIndex(PokemonIndex + 1);
  };
  const pokemon = pokemonList[PokemonIndex];
  return (
    <div>
      <PokemonCard pokemon={pokemon} pokemonList={pokemonList[0].name} />
      {PokemonIndex > 0 && (
        <button onClick={handleClickPrevious}>Précédent</button>
      )}
      {PokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
      )}
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
