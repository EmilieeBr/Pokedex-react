function NavBar({ pokemonList, setPokemonIndex }) {
  // Je veux un button par pokemon en prenant pokemonList[i].name

  return (
    <nav>
      {pokemonList.map((e, buttonIndex) => (
        <button
          onClick={() => {
            setPokemonIndex(buttonIndex);
          }}
          key={buttonIndex}
        >
          {e.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
