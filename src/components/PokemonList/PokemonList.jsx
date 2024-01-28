import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";
import usePokemonList from "../../hooks/usePokemonList";

const PokemonList = () => {
  const [pokemonListState, setPokemonListState] = usePokemonList();

  return (
    <>
      <div className="pokemon-list-wrapper">
        <div>
          <h1>Pokemon List</h1>
        </div>
        <div className="page-controls">
          <button
            onClick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.prevUrl,
              })
            }
          >
            Prev
          </button>
          <button
            onClick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.nextUrl,
              })
            }
          >
            Next
          </button>
        </div>
        <div className="pokemon-list">
          {pokemonListState.pokemonList.map((pokemon) => (
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

export default PokemonList;
