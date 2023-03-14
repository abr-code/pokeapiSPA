/* API = "https://pokeapi.co/api/v2/pokemon/";

let list = getList(API);

drawList(list.data);

btnPrevius(list.previous);
btnNext(list.next); */

import router from "./routes/routes.js";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
