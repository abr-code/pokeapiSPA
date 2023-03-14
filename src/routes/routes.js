import Header from "../template/Header.js";
import List from "../pages/List.js";
import Info from "../pages/info.js";
import getHash from "../utils/getHash.js";
// En este archivo se decide que pagina dibujar en basae al enlace.
let routes = {
  "/": List,
  "/info": Info,
};

let router = async () => {
  // Obteniendo elementos para dibujar
  let header = document.getElementById("header") || null;
  let content = document.getElementById("content") || null;

  let hash = getHash();
  header.innerHTML = Header();

  content.innerHTML = await routes[hash]();
};

export default router;
