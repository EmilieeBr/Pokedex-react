function NavBar({PokemonIndex, pokemonList, setPokemonIndex}) {
  const handleClickPrevious = () => {
    setPokemonIndex(PokemonIndex - 1);
  };

  const handleClickNext = () => {
    setPokemonIndex(PokemonIndex + 1);
  };
  return (
    <nav>
      {PokemonIndex > 0 && (
        <button onClick={handleClickPrevious}>Précédent</button>
      )}
      {PokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
      )}{" "}
    </nav>
  );
}

export default NavBar;
