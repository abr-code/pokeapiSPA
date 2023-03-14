const API = "https://pokeapi.co/api/v2/pokemon/";

let PokemonInfo = (function () {
  let instance;
  let pokemonData;
  function SingletonClass() {}
  SingletonClass.prototype.next = function () {};
  SingletonClass.prototype.previous = function () {};
  SingletonClass.prototype.getList = function () {
    return pokemonData;
  };
  SingletonClass.prototype.getPokemon = function (id) {
    return pokemonData.filter((pokemon) => {
      return pokemon.id == id;
    })[0];
  };

  async function init() {
    pokemonData = await fetchList();
  }
  let fetchList = async (link) => {
    let list = await fetch(link);
    list = await list.json();

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
        console.log("hola");
        if (!pokemonData) pokemonData = await fetchList(API);
        instance = new SingletonClass();
        delete instance.constructor;
      }
      return instance;
    },
  };
})();

export default PokemonInfo;
