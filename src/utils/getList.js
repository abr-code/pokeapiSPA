/**
 * Obtiene lista de 20 pokemons.
 *
 * @param {string} link enlace de consulta
 *
 */
async function getList(link) {
  fetch(link)
    .then((res) => res.json())
    .then(async (res) => {
      let pokeLista = await obtenerPokemonData(res.results);
      presentarLista(pokeLista);
      page.next = res.next;
      page.previous = res.previous;
    });
}

export default getList;
