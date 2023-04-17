export let producto = [
    {id:1, precio:5000, nombre:"remera Negra", categoria:"remeras", stock:"10", img:"https://img.freepik.com/foto-gratis/camiseta-negra-lisa-sobre-fondo-blanco_125540-2496.jpg"},
    {id:2, precio:5000, nombre:"remera Blanca", categoria:"remeras", stock:"10", img:"https://img.freepik.com/foto-gratis/camiseta-negra-lisa-sobre-fondo-blanco_125540-2496.jpg"},
    {id:3, precio:6000, nombre:"pantalon negro", categoria:"pantalones", stock:"10", img:"https://previews.123rf.com/images/showcake/showcake1511/showcake151100137/48203089-los-pantalones-vaqueros-del-pantal%C3%B3n-negro-sobre-el-fondo-blanco.jpg"},
    {id:4, precio:6000, nombre:"pantalon Blaco", categoria:"pantalones", stock:"10", img:"https://previews.123rf.com/images/showcake/showcake1511/showcake151100137/48203089-los-pantalones-vaqueros-del-pantal%C3%B3n-negro-sobre-el-fondo-blanco.jpg"},
    {id:5, precio:7000, nombre:"zapatillas Blancas", categoria:"calzado", stock:"10", img:"https://img.freepik.com/fotos-premium/zapatillas-blancas-sobre-fondo-blanco-par-zapatillas-mujer-moda-calzado-deportivo-blanco_256259-607.jpg"},
    {id:6, precio:7000, nombre:"zapatillas Negras", categoria:"calzado", stock:"10", img:"https://img.freepik.com/fotos-premium/zapatillas-blancas-sobre-fondo-blanco-par-zapatillas-mujer-moda-calzado-deportivo-blanco_256259-607.jpg"},
    {id:7, precio:4000, nombre:"aritos de acero Q plateados", categoria:"accesorio", stock:"10", img:"https://www.modapoint.com.ar/24190-large_default/aros-boton-stras.jpg"},
    {id:8, precio:4000, nombre:"aritos de acero Q dorados", categoria:"accesorio", stock:"10", img:"https://www.modapoint.com.ar/24190-large_default/aros-boton-stras.jpg"}
]


export let prodFetch = (id) =>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(producto)
    }, 1000)
})
}
