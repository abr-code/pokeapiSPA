/**
 * Obtiene lista de 20 pokemons.
 *
 * @param {string} link enlace de consulta
 *
 */
let getList = async (link) => {
  let list = await fetch(link);
  list = await list.json();

  let pokemonData = list.results.map(async (pokemon) => {
    let pokemonInfo = await fetch(pokemon.url);
    pokemonInfo = await pokemonInfo.json();
    return pokemonInfo;
  });
  let result = await Promise.all(pokemonData);

  return result;
};

export default getList;
