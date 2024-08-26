import { postConsultas, postConsultasHistorial } from "../servicios/postConsultas";
import { getConsultas, getConsultasById } from "../servicios/getConsultas";
import { deleteConsultas } from "../servicios/deleteConsultas";


const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const consultas = document.getElementById("consulta")
const date = document.getElementById("date")
const hora = document.getElementById("hora")
const btnEnviar = document.getElementById("btnGuardar");
const btnHistorial = document.getElementById("btnHistorial");
const mensaje = document.getElementById("mensaje");
const cuerpoTabla = document.getElementById("cuerpoTabla");

const urlHistorial = "http://localhost:3001/historial"

window.addEventListener("load", prellenarFormulario);

    consultas.forEach(consulta => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${consulta.nombreUsuario}</td>
            <td>${consulta.apellidoUsuario}</td>
            <td>${consulta.consultaUsuario}</td>
            <td>${consulta.dateConsulta}</td>
            <td>${consulta.horaConsulta}</td>
            <td>${consulta.estado || "Pendiente"}</td>
        `;
  
        const celdaBotones = document.createElement("td");

        const btnAprobar = document.createElement("button");
        btnAprobar.textContent = "Aceptar";
        btnAprobar.addEventListener('click', () => aceptarConsultas(consulta.id));

        const btnRechazar = document.createElement("button");
        btnRechazar.textContent = "Rechazar";
        btnRechazar.addEventListener('click', () => rechazarConsultas(consulta.id));

        celdaBotones.appendChild(btnAceptar);
        celdaBotones.appendChild( btnRechazar);

        fila.appendChild(celdaBotones);

        cuerpoTabla.appendChild(fila);
    });


async function enviarConsulta() {

    if (!nombre.value || !apellido.value || !consultas.value || !date.value || !hora.value) {
        mensaje.textContent = "Por favor, complete todos los campos";
        return;
    }

        const nuevaSolicitud = {
        nombreUsuario: nombre.value,
        apellidoUsuario: apellido.value,
        consultaUsuario: consultas.value,
        dateConsulta: date.value,
        horaConsulta: hora.value,
        estado:"Pendiente"
    };


    await postConsultas(nuevaSolicitud);
    mensaje.textContent = "Consulta enviada exitosamente";
    console.log(nuevaSolicitud);  

    nombre.value = "";
    apellido.value = "";
    consultas.value = "";
    date.value = "";
    hora.value = "";
}

async function aceptarConsultas(idConsultas) {

    console.log(idConsultas);
    
    let consulta = await getConsultasById(idConsultas);
    consulta.estado = "Aceptada";

    console.log(consulta);
    
    await postConsultasHistorial(consulta); 
    await deleteConsultas(idConsultas); 
}

async function rechazarConsultas(idConsultas) {

    console.log(idConsultas);

    let consulta = await getConsultasById(idConsultas);
    consulta.estado = "Rechazada";

    console.log(consulta);

    await postConsultasHistorial(consulta); 
    await deleteConsultas(idConsultas); 
}

moverConsultasAlHistorial();

async function moverConsultasAlHistorial(Consultas) {
    delete Consultas.id; 
    await postConsultas(Consultas, urlHistorial);
}

function verHistorial() {
    window.location.href = 'historial.html';
}

btnHistorial.addEventListener("click", verHistorial);


btnEnviar.addEventListener("click", enviarConsulta);