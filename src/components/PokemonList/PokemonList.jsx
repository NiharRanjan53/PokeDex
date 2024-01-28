import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";

const PokemonList = () => {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState(DEFAULT_URL);
  const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);
  async function downloadPokemons() {
    const response = await axios.get(pokedexUrl ? pokedexUrl : DEFAULT_URL);
    // console.log(response.data.next);
    setNextUrl(response.data.next);
    // console.log(response.data.previous);
    setPrevUrl(response.data.previous);
    const pokemonResults = response.data.results; //Array of pokemons
    const pokemonPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonListData = await axios.all(pokemonPromise);
    const pokemonFinalList = pokemonListData.map((pokemonData) => {
      const pokemon = pokemonData.data;
      return {
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.sprites.other.dream_world.front_default,
      };
    });
    console.log(pokemonFinalList);
    setPokemonList(pokemonFinalList);
  }

  useEffect(() => {
    downloadPokemons();
  }, []);
  return (
    <>
      <div className="pokemon-list-wrapper">
        <div>
          <h1>Pokemon List</h1>
        </div>
        <div className="page-controls">
          <button onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
          <button onClick={() => setPokedexUrl(nextUrl)}>Next</button>
        </div>
        <div className="pokemon-list">
          {pokemonList.map((pokemon) => (
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
