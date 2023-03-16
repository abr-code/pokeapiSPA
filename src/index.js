/* API = "https://pokeapi.co/api/v2/pokemon/";

let list = getList(API);

drawList(list.data);

btnPrevius(list.previous);
btnNext(list.next); */

import router from "./routes/routes.js";
import PokemonInfo from "./utils/Pokemoninfo.js";
import getHash from "./utils/getHash.js";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

// Cargar listeners de bottones usando mutacion observer
//debido a que el template/home.js no carga en el html antes de que se ejecute los scripts en JS

// Select the node that will be observed for mutations
const targetNode = document.getElementById("header");

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: false };

// Callback function to execute when mutations are observed
const callback = async (mutationList, observer) => {
  btnListeners();
  // Later, you can stop observing
  observer.disconnect();
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

let btnNext, btnPrevious;
async function btnListeners() {
  btnNext = document.getElementById("next") || null;
  btnPrevious = document.getElementById("previous") || null;
  const PokeInstance = await PokemonInfo.getInstance();

  btnNext.addEventListener("click", async () => {
    await PokeInstance.nextPage();
    router();
  });

  btnPrevious.addEventListener("click", async () => {
    await PokeInstance.previousPage();
    router();
  });

  window.addEventListener("hashchange", () => {
    if (getHash() != "/") {
      btnNext.disabled = true;
      btnPrevious.disabled = true;
      return;
    }
    btnNext.disabled = false;
    btnPrevious.disabled = false;
  });
}
