/* API = "https://pokeapi.co/api/v2/pokemon/";

let list = getList(API);

drawList(list.data);

btnPrevius(list.previous);
btnNext(list.next); */

import router from "./routes/routes.js";
import PokemonInfo from "./utils/Pokemoninfo.js";
import getHash from "./utils/getHash.js";

async function main() {
  let instance = await PokemonInfo.getInstance();
  await router();
  window.addEventListener("hashchange", router);

  let btnNext = document.getElementById("next") || null;
  let btnPrevious = document.getElementById("previous") || null;
  console.log(btnNext);
  btnNext.addEventListener("click", async () => {
    await instance.nextPage();
    router();
  });

  btnPrevious.addEventListener("click", async () => {
    await instance.previousPage();
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
main();
/* pokemoninfo.getinstance().then((instance) => {
  router();
     window.addeventlistener("load", router);
   }); */

//Backup del observer
/*   const targetNode = document.getElementById("header");
  const config = { attributes: false, childList: true, subtree: false };
  const callback = async (mutationList, observer) => {
    btnListeners();
    observer.disconnect();
  };
  const observer = new MutationObserver(callback);
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
  } */
