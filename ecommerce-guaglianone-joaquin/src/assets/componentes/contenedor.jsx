import { prodFetch } from "./prodFetch";
import { useEffect, useState } from "react";
import { Prod } from "./prod";
import { ListGroupItem } from "react-bootstrap";
import { ItemCount } from "./contador";

export const Contenedor = () => {
  const [productos, setProductos] = useState([]);

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
    let url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";
    fetch(url, {});
  }, []);

  useEffect(() => {
    prodFetch()
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => console.log("siempre a lo ultimo"));
  }, []);

  console.log(productos);

  return (
    <div className="row">

<input value={filtro} onChange={searcher} type="text" placeholder="buscar por categoria"/>

      {resultados.map((prod) => {
        return (
          <div className="listaDeProd">
            <Prod nombre={prod.nombre} img={prod.img} precio={prod.precio} categoria={prod.categoria}/>
            <ItemCount />
          </div>
        );
      })}
    </div>
  );
};
