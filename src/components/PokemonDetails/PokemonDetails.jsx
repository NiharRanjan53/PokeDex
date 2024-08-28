import { Link, useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonDetails.css";

const PokemonDetails = ({ pokemonName }) => {
  const [pokemon, pokemonListState] = usePokemon(pokemonName);
  return (
    <>
      <h1 className="pokedex-redirect">
        <Link to="/">Pokedex</Link>
      </h1>
      {pokemon && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-name"> {pokemon.name}</div>
          <div className="pokemon-image">
            <img className="pokemon-image" src={pokemon.image}></img>
          </div>
          <div className="pokemon-attr">
            <div>Height: {pokemon.height}</div>
            <div> Weight: {pokemon.weight}</div>
          </div>
          <div className="pokemon-types">
            Type:{" "}
            {pokemon.types.map((t) => (
              <span className="pokemon-type" key={t.type.name}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="similar-pokemons">
        <h2>Similar Pokemons</h2>
        <div className="pokemon-similar-boxes">
          {pokemonListState.pokemonList.length > 0 &&
            pokemonListState.pokemonList.map((pokemon) => (
              <Pokemon
                id={pokemon.id}
                key={pokemon.id}
                name={pokemon.name}
                url={pokemon.image}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
