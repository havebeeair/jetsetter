export function obtenerItemsPorCategoria(lista, categoria, valor) {
    const nuevaLista = lista.filter((item) => {
      if (item[categoria] === valor) {
        return item;
      }
    });
    return nuevaLista;
  }