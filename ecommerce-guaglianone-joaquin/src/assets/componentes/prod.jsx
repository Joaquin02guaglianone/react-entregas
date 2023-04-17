export const Prod = (props) => {

    return (
        <div className="listaDeProd">
            
            <ul>
                <li>
                  <img src={props.img}/>
                  </li>
                  <li>
                  <p>categoria: {props.categoria}</p>
                  <p>{props.nombre}</p>
                  <p>precio: ${props.precio}</p>
                  </li>
                  <li>
                    
                  </li>
            </ul>

            <button>detalles</button>
        </div>
    )
}