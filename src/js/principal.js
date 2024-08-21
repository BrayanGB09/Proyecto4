function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar));

};

function obtenerAlmacenamientoLocal(llave) {
    
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;

};

let productos = obtenerAlmacenamientoLocal('productos') || [];

const encabezado = document.getElementById("encabezado");
const contenedor = document.getElementById("contenedor");
const body = document.querySelector("body");
const carrito = document.getElementById("carrito");
const numero =document.getElementById("numero")
const contenedorCompra = document.getElementById("contenedorCompra");
const informacionCompra = document.getElementById("informacionCompra");
const x = document.getElementById("x");
const productosCompra = document.getElementById("productosCompra");
const total = document.getElementById("total");

let lista = [];
let valortotal = 0;

window.addEventListener("scroll", function(){
    
    if(contenedor.getBoundingClientRect().top<10){
        
        encabezado.classList.add("scroll");
    
    } else {
        
        encabezado.classList.remove("scroll");
    
    };
});

window.addEventListener('load', function () {
    
    visualizarProductos();
    contenedorCompra.classList.add("none");

});

function comprar(indice) {
    
    lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor });

    let van = true;
    let i = 0;
    
    while (van == true) {
        
        if (productos[i].nombre == productos[indice].nombre) {
            
            productos[i].existencia -= 1;
            
            if (productos[i].existencia == 0) {
               
                visualizarProductos();
           
            };
            
            van = false
        
        };
        
        guardarAlmacenamientoLocal("productos", productos);
        i += 1;
    
    };
    
    numero.innerHTML = lista.length;
    numero.classList.add("diseñoNumero");
    return lista;

};

carrito.addEventListener("click", function(){
    
    body.style.overflow = "hidden";
    contenedorCompra.classList.remove('none');
    contenedorCompra.classList.add('contenedorCompra');
    informacionCompra.classList.add('informacionCompra');
    mostrarElementosLista();

});

function mostrarElementosLista() {
    
    productosCompra.innerHTML = "";
    valortotal = 0;
    
    for (let i = 0; i < lista.length; i++){
        
        productosCompra.innerHTML += `<div><div class="img"><button onclick = eliminar (${i}) class="botonTrash"><img src="/img/trash.png"></button><p>${lista[i].nombre}</p></div><p> ${lista[i].precio}</p></div>`;
        valortotal += parseFloat(lista[i].precio);
    
    };
    
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`;

};

function eliminar(indice){
    
    let van = true;
    let i = 0;

    while (van == true) {
        
        if (productos[i].nombre == lista[indice].nombre) {
            
            productos[i].existencia++;
            lista.splice(indice, 1);
            van = false;
        
        };
        
        i++;
    
    };

    guardarAlmacenamientoLocal("productos", productos);

    numero.innerHTML = lista.length;
   
    if (lista.length == 0){
       
        numero.classList.remove("diseñoNumero");
    
    };

    visualizarProductos();
    
    mostrarElementosLista();

};

x.addEventListener("click", function(){
    
    body.style.overflow = "auto";
    contenedorCompra.classList.add('none');
    contenedorCompra.classList.remove('contenedorCompra');
    informacionCompra.classList.remove('informacionCompra');

});