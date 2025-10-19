/*function PokemonCard() {
  return (
    <figure>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasaur"
      />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
}
  */

function PokemonCard({ pokemon }) {
  return pokemon.imgSrc !== undefined ? (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ) : (
    <p>
      ???
      <br />
      <br />
      <figcaption>{pokemon.name}</figcaption>
    </p>
  );
}

export default PokemonCard;
