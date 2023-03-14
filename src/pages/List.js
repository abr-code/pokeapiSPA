import getList from "../utils/getList.js";
import PokemonInfo from "../utils/Pokemoninfo.js";
const API = "https://pokeapi.co/api/v2/pokemon/";

const List = async () => {
  /*  const pokemonList = await getList(API);
   */
  const PokemonInstance = await PokemonInfo.getInstance();
  let pokemonList = PokemonInstance.getList();
  /*   const pokemonList = [
    {
      name: 1,
      sprites: { front_default: "" },
      types: [{ type: { name: 2 } }],
      id: "ho",
    },
  ]; */
  const view = `
         ${pokemonList
           .map((pokemon) => {
             return `
    <div id="card" class="card">
    <a href="#/info/${pokemon.id}">
    <div class="img-div">
    <img src="${pokemon.sprites.front_default}" alt=${pokemon.name} class="img">
    </div>
    <div class="info">
        <div>Nombre: ${pokemon.name}</div>
        <div>type: ${pokemon.types[0].type.name}</div>
        <div>id: ${pokemon.id}</div>
    </div>
    </a>
    </div>
    `;
           })
           .join("")} 
    `;

  return view;
};

export default List;
