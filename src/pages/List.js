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
      name: "Bulbasaur",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
      types: [{ type: { name: "grass" } }],
      id: "#001",
    },
    {
      name: "Charmander",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      types: [{ type: { name: "fire" } }],
      id: "#004",
    },
    {
      name: "Squirtle",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      },
      types: [{ type: { name: "water" } }],
      id: "#007",
    },
  ]; */
  const view = `
         ${pokemonList
           .map((pokemon) => {
             return `
    <div id="card" class="card ">
    <a href="#/info/${pokemon.id}">
    <div class="img-div">
    <img src="${pokemon.sprites.front_default}" alt=${pokemon.name} class="img">
    </div>
    <div class="info">
        <div>Nombre: ${pokemon.name}</div>
        <div class="type ${pokemon.types[0].type.name} ">tipo: ${pokemon.types[0].type.name}</div>
        <div>Id: #${pokemon.id}</div>
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
