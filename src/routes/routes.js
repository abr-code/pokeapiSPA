import Header from "../template/Header.js";
import List from "../pages/List.js";
// En este archivo se decide que pagina dibujar en basae al enlace.
let routes = {
  "/": "List",
  "/info": "Info",
};

let router = async () => {
  // Obteniendo elementos para dibujar
  let header = document.getElementById("header") || null;
  let content = document.getElementById("content") || null;

  header.innerHTML = await Header();
  content.innerHTML = await List();
};

export default router;
