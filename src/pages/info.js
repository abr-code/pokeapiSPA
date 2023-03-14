import PokemonInfo from "../utils/Pokemoninfo.js";
import getHashId from "../utils/getHashId.js";

const Info = async () => {
  let pokeInstance = await PokemonInfo.getInstance();
  let id = getHashId();
  let pokemon = pokeInstance.getPokemon(id);
  /*   pokemon = {
    name: 1,
    sprites: { front_default: "" },
    types: [{ type: { name: 2 } }],
    id: "ho",
  }; */

  const view = `
    <div class="card">
    <div class="img-div">
    <img src="${pokemon.sprites.front_default}" alt="" class="img">
    </div>
    <div class="info">
        <div>Nombre: ${pokemon.name}</div>
        <div>type: ${pokemon.types[0].type.name}</div>
        <div>id: ${pokemon.id}</div>
    </div>
    </div>
    `;

  return view;
};

export default Info;
