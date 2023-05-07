import { prodFetch, producto } from "./prodFetch";
import { useEffect, useState } from "react";
import { Prod } from "./prod";
import { Link, useParams } from 'react-router-dom';
import { collection, doc, getDocs, getFirestore, query, where } from 'firebase/firestore'

export const Contenedor = () => {
  const [productos, setProductos] = useState([]);

  const {cid} = useParams()

  const [filtro, setFiltro] = useState("")

  // funciones

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

  const db = getFirestore()
const queryCollection = collection(db, 'productos')

const queryFiltrado = query(queryCollection, where('categoria', '==', cid))

getDocs(queryFiltrado)
.then (resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
  
   prodFetch()
   .then((resp) => setProductos(resp.filter(prod => prod.categoria === cid)))
  .catch((err) => (err))
  .finally(() => ("siempre a lo ultimo"));

 } else {

  const db = getFirestore()
  const queryCollection = collection(db, 'productos')
  
  getDocs(queryCollection)
  .then (resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))

 }

  }, [cid]);

  return (
    <div className="row">

  <input className="CatFilter" value={filtro} onChange={searcher} type="text" placeholder="buscar por categoria"/>

      {resultados.map((prod) => {
        return ( 
          <div key={prod.id} className="listaDeProd">
          <div>
            <Prod  nombre={prod.nombre} img={prod.img} precio={prod.precio} categoria={prod.categoria} stock={prod.stock} descripcion={prod.descripcion}/> 
            <Link to={`/detail/${prod.id}`}><button className="BotDet">Mostrar detalles</button></Link>        
          </div>
          </div>
        );
      })}
    </div>
  );
};
