import router from "./routes/routes.js";
import PokemonInfo from "./utils/Pokemoninfo.js";
import getHash from "./utils/getHash.js";

async function main() {
  let instance = await PokemonInfo.getInstance();
  await router();
  //return;
  window.addEventListener("hashchange", router);

  let btnNext = document.getElementById("next") || null;
  let btnPrevious = document.getElementById("previous") || null;
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
