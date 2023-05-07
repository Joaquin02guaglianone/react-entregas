import Titulo from "../Titulo";
import { usarCompraContexto } from "./ContextoCarrito";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  getFirestore
} from "firebase/firestore";
import { useState } from "react";

export const CartContenedor = () => {
  const [idCompra, actIdCompra] = useState(null);
  const [formDato, actFormDato] = useState({
    nombreC: "",
    Telefono: "",
    Email: "",
  });
  const { compra, vaciarCarrito, valorTotal, eliminarProducto, cantidadTotal } =
    usarCompraContexto();

  const finalizarCompra = (eventoB) => {

    eventoB.preventDefault()

    const orden = {
      comprador: formDato,
      pedido: compra.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad })),
      total: valorTotal(),
    };

    const db = getFirestore();

    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, orden)
      .then((resp) => actIdCompra(resp.id))
      .finally(() => {
        vaciarCarrito();
      });
  };

  const aCambio = (event) => {
    actFormDato({
      ...formDato,
      [event.target.name]: event.target.value,
    });
    console.log(formDato)
  };



  return (
    <>
      {idCompra && <> <h3> Muchas Gracias por su compra </h3> 
      <div className="compId">
        <p>el id de la orden de su compra es : {idCompra} nos contactaremos atravez del email o telefono brindado para terminar de confirmar su pedido su telefono es {formDato.Telefono} y el mail brindado es {formDato.Email}</p>
      </div> </> }
    

      
      {compra.length == 0 ? (
        <div>
          {" "}
          <Titulo subtitulo="No hay compra" />
          <Link to={"/"}>
            {" "}
            <button  className="BotDet" > Ir al inicio </button>{" "}
          </Link>
        </div>
      ) : (
        <div>
          <Titulo subtitulo="Tu compra" />

          <h3>Cantidad de productos : {cantidadTotal()}</h3>

          <h3>Precio Total : {valorTotal()}</h3>

          <button className="BotDet vac" onClick={vaciarCarrito}> vaciar carrito </button>

          <div>
            {compra.map((producto) => (
              <div key={producto.id} className="col">
                <img src={producto.img} />
                <h3>{producto.nombre}</h3>
                <p>Cantidad {producto.cantidad}</p>
                <p>Precio: ${producto.precio} </p>
                <p>{producto.descripcion}</p>
                <button className="BotDet elim" onClick={() => eliminarProducto(producto.id)}>
                  {" "}
                  -{" "}
                </button>
              </div>
            ))}

            <form onSubmit={finalizarCompra}>
              <input className="CatFilter"
                type="text"
                name="nombreC"
                placeholder="ingrese su nombre y apellido"
                onChange={aCambio}
                value={formDato.nombreC}
              />
              <input className="CatFilter"
                type="text"
                name="Telefono"
                placeholder="ingrese su numero de teléfono"
                onChange={aCambio}
                value={formDato.Telefono}
              />
              <input className="CatFilter"
                type="text"
                name="Email"
                placeholder="ingrese su correo electronico"
                onChange={aCambio}
                value={formDato.Email}
              />

              <br />
              <button className="BotDet" type="submit"> finalizar pedido </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
