//Instanciar elementos html
const divpagina = document.getElementsByClassName("container")[0];
const btnPrevious = document.getElementById("previous");
const btnNext = document.getElementById("next");

// listers
btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);

// Variables globales
let page = { next: "", previous: "" };
/*const lista =  {
    "count": 1154, "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous": null, "results": [{ "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
    { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" },
    { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" },
    { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" },
    { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/" },
    { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/" },
    { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon/7/" },
    { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon/8/" },
    { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon/9/" },
    { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" },
    { "name": "metapod", "url": "https://pokeapi.co/api/v2/pokemon/11/" },
    { "name": "butterfree", "url": "https://pokeapi.co/api/v2/pokemon/12/" },
    { "name": "weedle", "url": "https://pokeapi.co/api/v2/pokemon/13/" },
    { "name": "kakuna", "url": "https://pokeapi.co/api/v2/pokemon/14/" },
    { "name": "beedrill", "url": "https://pokeapi.co/api/v2/pokemon/15/" },
    { "name": "pidgey", "url": "https://pokeapi.co/api/v2/pokemon/16/" },
    { "name": "pidgeotto", "url": "https://pokeapi.co/api/v2/pokemon/17/" },
    { "name": "pidgeot", "url": "https://pokeapi.co/api/v2/pokemon/18/" },
    { "name": "rattata", "url": "https://pokeapi.co/api/v2/pokemon/19/" },
    { "name": "raticate", "url": "https://pokeapi.co/api/v2/pokemon/20/" }]
} ;*/

// METODOS CORE

/**
 * Obtiene lista de 20 pokemons.
 *
 * @param {string} link enlace de consulta
 *
 */
async function getLista(link) {
  fetch(link)
    .then((res) => res.json())
    .then(async (res) => {
      let pokeLista = await obtenerPokemonData(res.results);
      presentarLista(pokeLista);
      page.next = res.next;
      page.previous = res.previous;
    });
}

getLista("https://pokeapi.co/api/v2/pokemon/");

/**
 * Obtiene los datos de cada pokemon en la lista
 * @param {Array[object]} lista lista de pokemon y su url
 */
async function obtenerPokemonData(lista) {
  // no entiendo el map
  let peticiones = lista.map(async (pokemon) => {
    let pokemonData = await fetch(pokemon.url);
    pokemonData = await pokemonData.json();
    return pokemonData;
  });
  let pokelista = await Promise.all(peticiones);
  return pokelista;
}

/**
 * Dibuja la lista.
 *
 * @param {Array[object]} lista lista de pokemon
 *
 */
function presentarLista(lista) {
  lista.forEach((pokemon) => {
    crearTarjeta(pokemon);
  });
}

/**
 * añade una tarjeta al contenedor.
 *
 * @param {object} pokemon objeto pokemon
 *
 */
function crearTarjeta(pokemon) {
  let tarjeta = document.createElement("div");
  tarjeta.className = "card";
  tarjeta.innerHTML = `
    <div class="card">
    <div class="img-div">
    <img src="${pokemon.sprites.front_default}" alt="" class="img">
    </div>
    <div class="info">
        <div>Nombre: ${pokemon.name}</div>
        <div>type: ${pokemon.types[0].type.name}</div>
        <div>id: ${pokemon.id}</div>
    </div>
    `;
  divpagina.appendChild(tarjeta);
}

/**
 * va a la anterior pagina
 *
 */
function previous() {
  if (!page.previous) return;
  borrarPagina();
  getLista(page.previous);
}

/**
 * va a la siguiente pagina
 *
 */
function next() {
  borrarPagina();
  getLista(page.next);
}

// METODOS DE UTILIDAD

/**
 * Elimina hijos del contenedorDiv
 *
 */
const borrarPagina = () => {
  while (divpagina.firstChild) {
    divpagina.removeChild(divpagina.firstChild);
  }
};
