import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState(null);

  const downloadPokemon = async () => {
    const response = await axios.get(BASE_URL + id);
    const pokemon = response.data;

    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.other.dream_world.front_default,
    });
  };

  useEffect(() => {
    downloadPokemon();
  });
  return (
    pokemon && (
      <div className="pokemon-details-wrapper">
        <div className="pokemon-name"> {pokemon.name}</div>
        <div className="pokemon-image">
          <img src={pokemon.image}></img>
        </div>
        <div className="pokemon-attr">
          <div>Height: {pokemon.height}</div>
          <div> Weight: {pokemon.weight}</div>
        </div>
        <div className="pokemon-types">
          Type:{" "}
          {pokemon.types.map((t) => (
            <span key={t.type.name}>{t.type.name}</span>
          ))}
        </div>
      </div>
    )
  );
};

export default PokemonDetails;
