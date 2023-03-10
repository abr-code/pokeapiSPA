import getList from "../utils/getList.js";
const API = "https://pokeapi.co/api/v2/pokemon/";

const List = async () => {
  const pokemonList = await getList(API);

  const view = `
         ${pokemonList
           .map((pokemon) => {
             return `
    <div id="card" class="card">
    <div class="img-div">
    <img src="${pokemon.sprites.front_default}" alt=${pokemon.name} class="img">
    </div>
    <div class="info">
        <div>Nombre: ${pokemon.name}</div>
        <div>type: ${pokemon.types[0].type.name}</div>
        <div>id: ${pokemon.id}</div>
    </div>
    </div>
    `;
           })
           .join("")} 
    `;

  return view;
};

export default List;
