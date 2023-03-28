function PokemonCard({pokemon}) {
//   const pokemon = pokemonList[1];
  return pokemon.imgSrc == null ? (
   <div> <p>???</p>
    <figcaption>{pokemon.name}</figcaption> </div>
  ) : (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}


export default PokemonCard;
