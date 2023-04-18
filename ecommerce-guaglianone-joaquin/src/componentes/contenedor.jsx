import { prodFetch } from "./prodFetch";
import { useEffect, useState } from "react";
import { Prod } from "./prod";
import { ListGroupItem } from "react-bootstrap";
import { ItemCount } from "./contador";
import { Link, useParams } from 'react-router-dom';

export const Contenedor = () => {
  const [productos, setProductos] = useState([]);

  const {cid} = useParams()

  const [filtro, setFiltro] = useState("")

  // funciones

const deta = () => {

  
}

  const searcher = (e) => {
    setFiltro (e.target.value)
  }

  let resultados = []
if(!filtro) {
  resultados = productos
} else {
 resultados = productos.filter ( (datos) => 
datos.categoria.toLowerCase().includes(filtro.toLocaleLowerCase()))

}

  useEffect(() => {

if (cid) {
  
  prodFetch()
  .then((resp) => setProductos(resp.filter(prod => prod.categoria === cid)))
  .catch((err) => console.log(err))
  .finally(() => console.log("siempre a lo ultimo"));



} else {
  
  prodFetch()
  .then((resp) => setProductos(resp))
  .catch((err) => console.log(err))
  .finally(() => console.log("siempre a lo ultimo"));


}

  }, [cid]);

  console.log(productos);

  return (
    <div className="row">

<input value={filtro} onChange={searcher} type="text" placeholder="buscar por categoria"/>

      {resultados.map((prod) => {
        return ( 
          <div>
          <div className="listaDeProd">
            <Prod nombre={prod.nombre} img={prod.img} precio={prod.precio} categoria={prod.categoria} stock={prod.stock} descripcion={prod.descripcion}/>         
          </div>
          <Link to={`/detail/${prod.id}`}><button>Mostrar detalles</button></Link>
          </div>
        );
      })}
    </div>
  );
};
