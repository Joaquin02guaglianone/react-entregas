export let producto = [
    {id:"1", precio:5000, nombre:"remera Negra", categoria:"remeras", descripcion:"remera puma color negro", stock:"10", img:"https://img.freepik.com/foto-gratis/camiseta-negra-lisa-sobre-fondo-blanco_125540-2496.jpg"},
    {id:"2", precio:5000, nombre:"remera Blanca", categoria:"remeras", descripcion:"remera puma color blanco", stock:"10", img:"https://img.freepik.com/foto-gratis/camiseta-negra-lisa-sobre-fondo-blanco_125540-2496.jpg"},
    {id:"3", precio:6000, nombre:"pantalon negro", categoria:"pantalones", descripcion:"pantalon adidas color negro", stock:"10", img:"https://previews.123rf.com/images/showcake/showcake1511/showcake151100137/48203089-los-pantalones-vaqueros-del-pantal%C3%B3n-negro-sobre-el-fondo-blanco.jpg"},
    {id:"4", precio:6000, nombre:"pantalon Blaco", categoria:"pantalones", descripcion:"pantalon adidas color blanco", stock:"10", img:"https://previews.123rf.com/images/showcake/showcake1511/showcake151100137/48203089-los-pantalones-vaqueros-del-pantal%C3%B3n-negro-sobre-el-fondo-blanco.jpg"},
    {id:"5", precio:7000, nombre:"zapatillas Blancas", categoria:"calzado", descripcion:"zapatillas converse color blanco", stock:"10", img:"https://img.freepik.com/fotos-premium/zapatillas-blancas-sobre-fondo-blanco-par-zapatillas-mujer-moda-calzado-deportivo-blanco_256259-607.jpg"},
    {id:"6", precio:7000, nombre:"zapatillas Negras", categoria:"calzado", descripcion:"zapatillas converse color negro", stock:"10", img:"https://img.freepik.com/fotos-premium/zapatillas-blancas-sobre-fondo-blanco-par-zapatillas-mujer-moda-calzado-deportivo-blanco_256259-607.jpg"},
    {id:"7", precio:4000, nombre:"aritos de acero Q plateados", categoria:"accesorios", descripcion:"aritos de acero quirurgicos color plata", stock:"10", img:"https://www.modapoint.com.ar/24190-large_default/aros-boton-stras.jpg"},
    {id:"8", precio:4000, nombre:"aritos de acero Q dorados", categoria:"accesorios", descripcion:"arios de acero quirurgico color oro", stock:"10", img:"https://www.modapoint.com.ar/24190-large_default/aros-boton-stras.jpg"}
]


export let prodFetch = (id) =>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(id ? producto.find(prod => prod.id === id): producto)
    }, 1000)
})
}
