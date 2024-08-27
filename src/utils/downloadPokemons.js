import axios from "axios";
async function downloadPokemons(
  pokemonListState,
  setPokemonListState,
  defaultUrl,
  limit = 20
) {
  const response = await axios.get(
    pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defaultUrl
  );

  let pokemonResults = response.data.results
    ? response.data.results
    : response.data.pokemon; //Array of pokemons

  pokemonResults = pokemonResults.slice(0, limit);

  const pokemonPromise = pokemonResults.map((p) => {
    if (p.url) {
      return axios.get(p.url);
    } else if (p.pokemon.url) {
      return axios.get(p.pokemon.url);
    }
  });
  const pokemonListData = await axios.all(pokemonPromise);
  console.log(pokemonListData);
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
export default downloadPokemons;
