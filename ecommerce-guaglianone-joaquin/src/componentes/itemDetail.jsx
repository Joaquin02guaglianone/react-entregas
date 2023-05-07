import { useState } from "react"
import { Link } from "react-router-dom"
import { usarCompraContexto } from "./carrito/ContextoCarrito"
import { ItemContador } from "./contador"


export const ItemDetail = ({producto}) => {
    const [aCantidad, actCantidad] = useState (false)

const {agregarAlCarrito,} = usarCompraContexto()

    const porAgregar = (cantidad) => {
         agregarAlCarrito({...producto, cantidad: cantidad})
         actCantidad(true)
    }

    return (
        <div className="row">
            <div className="col">
              <img src={producto.img} />
              <h3>{producto.nombre}</h3>
              <p>precio: ${producto.precio}</p>
              <p>stock: {producto.stock} unidades disponibles</p>
              <p>descripcion del articulo: {producto.descripcion}</p>
            </div>
            <div>

               {aCantidad ?
                 <>
                 <Link to={'/Carrito'}><button className="BotDet">Terminar compra</button></Link>
                 <Link to={'/'}><button className="BotDet">Volver Al Inicio</button></Link>
                 </>
                :
                <ItemContador initial={0} stock={10} porAgregar={porAgregar }/>
                }
            
                
            </div>
        </div>
    )
}