const Info = async (pokemon) => {
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
