import axios from "axios";
import React, { useEffect, useState } from "react";

const usePokemonList = () => {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: DEFAULT_URL,
    nextUrl: DEFAULT_URL,
    prevUrl: DEFAULT_URL,
  });

  async function downloadPokemons() {
    const response = await axios.get(
      pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL
    );

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
    setPokemonListState({
      ...pokemonListState,
      pokemonList: pokemonFinalList,
      nextUrl: response.data.next,
      prevUrl: response.data.previous,
    });
  }

  useEffect(() => {
    downloadPokemons();
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
};

export default usePokemonList;
