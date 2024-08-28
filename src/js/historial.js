import { getHistorial } from "../services/getConsultas";


const cuerpoTablaHistorial = document.getElementById("cuerpoTablaHistorial");
const btnPrincipal = document.getElementById("btnPrincipal")

async function cargarHistorial() {
    const historial = await getHistorial();
    console.log( cuerpoTablaHistorial);
    cuerpoTablaHistorial.innerHTML = "";
    historial.forEach(consulta => {
        const fila = document.createElement('tr');
        fila.innerHTML = 
            `<td>${consulta.nombre}</td>
            <td>${consulta.apellido}</td>
            <td>${consulta.consultasUsuario}</td>
            <td>${consulta.fecha}</td>
            <td>${consulta.hora}</td>
            <td>${consulta.estado || 'Pendiente'}</td>`;
        cuerpoTablaHistorial.appendChild(fila);
    });
}

cargarHistorial() 

function verPrincipal() {
  window.location.href = 'principal.html';
}

btnPrincipal.addEventListener("click", verPrincipal);