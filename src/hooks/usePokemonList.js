import React, { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

const usePokemonList = (DEFAULT_URL) => {
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: DEFAULT_URL,
    nextUrl: DEFAULT_URL,
    prevUrl: DEFAULT_URL,
  });

  useEffect(() => {
    downloadPokemons(pokemonListState, setPokemonListState, DEFAULT_URL);
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
};

export default usePokemonList;
