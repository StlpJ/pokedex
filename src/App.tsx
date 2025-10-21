import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <button type="button" onClick={() => setPokemonName("bulbasaur")}>
        Bulbasaur
      </button>
      <button type="button" onClick={() => setPokemonName("mew")}>
        Mew
      </button>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;

/*
  const [user, setUser] = useState({ name: "Bulbasaur" });

  const handleClick = () => {
    // user.name = "Alice"; => NO !!!
    setUser({ name: "Alice" });
  };

*/
