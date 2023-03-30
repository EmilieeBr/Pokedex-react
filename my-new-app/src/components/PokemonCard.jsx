import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log(pokemon);
  
  return pokemon.imgSrc == null ? (
    <div>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>{" "}
    </div>
  ) : (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};


export default PokemonCard;
