export function obtenerItemsPorCategoria(lista, categoria, valor) {
  const nuevaLista = lista.filter((item) => {
    if (item[categoria] === valor) {
      return item;
    }
  });
  return nuevaLista;
}

export function borrarElementoLista(lista, id) {
  const listaModificada = lista.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  return listaModificada;
}
