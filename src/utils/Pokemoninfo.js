const API = "https://pokeapi.co/api/v2/pokemon/";
let PokemonInfo = (function () {
  let instance;
  let pokemonData, next, previous;
  function SingletonClass() {}
  SingletonClass.prototype.nextPage = async function () {
    if (!next) return;
    pokemonData = await fetchList(next);
    return pokemonData;
  };
  SingletonClass.prototype.previousPage = async function () {
    if (!previous) return;
    pokemonData = await fetchList(previous);
    return pokemonData;
  };
  SingletonClass.prototype.getList = function () {
    return pokemonData;
  };
  SingletonClass.prototype.getPokemon = function (id) {
    if (!pokemonData) return;
    return pokemonData.filter((pokemon) => {
      return pokemon.id == id;
    })[0];
  };

  let fetchList = async (link) => {
    let list = await fetch(link);
    list = await list.json();
    next = list.next;
    previous = list.previous;

    let pokemonList = list.results.map(async (pokemon) => {
      let pokemonInfo = await fetch(pokemon.url);
      pokemonInfo = await pokemonInfo.json();
      return pokemonInfo;
    });
    let result = await Promise.all(pokemonList);

    return result;
  };

  return {
    getInstance: async function () {
      if (!instance) {
        pokemonData = await fetchList(API);
        instance = new SingletonClass();
        delete instance.constructor;
      }
      return instance;
    },
  };
})();

export default PokemonInfo;
