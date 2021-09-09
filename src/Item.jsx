import './App.css';

function Item () {
    return (
    <div className="item-container" >
        <input type="checkbox" className="checkbox-item" ></input>
        <div className="item-texto">Pantalon</div>
        <button className="btn-remover-item">Remover</button>
    </div>
    )
}

export default Item;