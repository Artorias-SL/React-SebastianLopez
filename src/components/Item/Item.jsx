import './Item.css';

function Item({ nombre, precio }) {
    let contador=0
    function agregarAlCarrito() {
        console.log("Vas a agregar:", nombre);
        contador++
        console.log('tienes',contador," productos en el carrito")
    };

    return (
        <div className="card">
            <h2>{nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <button disabled={!nombre} className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
        </div>
    );
};

export default Item;