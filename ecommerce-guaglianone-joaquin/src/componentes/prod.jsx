export const Prod = (props) => {

    return (
        <div className="padre">
            <div className="hijo">
            <ul>
                <li>
                  <img src={props.img}/>
                  </li>
                  <li>
                  <p>Categoria: {props.categoria}</p>
                  <p>{props.nombre}</p>
                  <p>Precio: ${props.precio}</p>
                  <p>Stock: {props.stock} unidades disponibles</p>
                  <p>Descripcion: {props.descripcion}</p>
                  </li>
            </ul>
            </div>
        </div>
    )
}