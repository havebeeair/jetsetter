import "./App.css";

function Item(props) {
  return (
    <div className="item-container">
      <input type="checkbox" className="checkbox-item" />
      <div className="item-texto">{props.nombre}</div>
      <button className="btn-remover-item">Remover</button>
    </div>
  );
}

export default Item;
