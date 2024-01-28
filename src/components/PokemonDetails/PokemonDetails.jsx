import { Link, useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon] = usePokemon(id);
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
    </>
  );
};

export default PokemonDetails;
