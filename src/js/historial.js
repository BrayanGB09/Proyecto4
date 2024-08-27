import { getHistorial } from "../services/getConsultas";


const cuerpoTablaHistorial = document.getElementById("cuerpoTablaHistorial");
const btnPrincipal = document.getElementById("btnPrincipal")
const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");


btnBuscar.addEventListener("click", function () {
   buscador()

   async function buscador() {
    const cuerpoTablaHistorial = await getHistorial()
     
    for (let index = 0; index < cuerpoTablaHistorial.length; index++) {
  
      if (cuerpoTablaHistorial[index].nombre === nombre.value && cuerpoTablaHistorial[index].apellido === apellido.value && cuerpoTablaHistorial[index].consultas === consultas.value && cuerpoTablaHistorial[index].fecha === fecha.value && cuerpoTablaHistorial[index].hora === hora.value) {
        
      }
    }

   }
})



async function cargarHistorial() {
    const historial = await getHistorial();
    console.log( cuerpoTablaHistorial);
    cuerpoTablaHistorial.innerHTML = "";
    historial.forEach(consulta => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${consulta.cedulaUsuario}</td>
            <td>${consulta.codigoComputadora}</td>
            <td>${consulta.sede}</td>
            <td>${consulta.fechaSalida}</td>
            <td>${consulta.fechaRegreso}</td>
            <td>${consulta.estado || 'Pendiente'}</td>
        `;
        cuerpoTablaHistorial.appendChild(fila);
    });
}

cargarHistorial() 

function verPrincipal() {
  window.location.href = 'prueba.html';
}

btnPrincipal.addEventListener("click", verPrincipal);


//if (e.target.matches(".buscador")){
  //  document.querySelectorAll(".datos").forEach((tarjeta) => {
    //    tarjeta.textContent.toLocaleLowerCase().includes(e.target.
     //   value)?tarjeta.classList.remove("filter"): tarjeta.classList.add("filter");
   // });
   // if (e.key === "Escape") {
   //     e.target.value = "";
   // }
//}
//})


//function myFunction() {
 // var input, filter, section, div, h1, i;
///// section = document.getElementById("mySection");
 // div = section.getElementsByTagName("div");
 // for (i = 0; i < div.length; i++) {
   // h1 = div[i].getElementsByTagName("h1")[0];
   // if (h1) {
    //  if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
     //   div[i].style.display = "";
      //} else {
       // div[i].style.display = "none";
     // }
   // }
 // }
//}