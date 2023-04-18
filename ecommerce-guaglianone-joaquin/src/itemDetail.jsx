import { ItemCount } from "./componentes/contador"
import { producto } from "./componentes/prodFetch"

export const ItemDetail = ({product}) => {
console.log(product.nombre)

    return (
        <div className="row">
            <div className="col">
                <img src={product.img} />
              <h3>{product.nombre}</h3>
              <p>precio: ${product.precio}</p>
              <p>stock: {product.stock} unidades disponibles</p>
              <p>descripcion del articulo: {product.descripcion}</p>
            </div>
            <div>
                <ItemCount/>
            </div>
        </div>
    )
}