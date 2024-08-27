import { postConsultas, postHistorial,} from "../services/postConsultas";
import { getConsultas, getConsultasById } from "../services/getConsultas";
import { deleteConsultas } from "../services/deleteConsultas";
//import { getUsers } from "../services/getUsers";


const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const consultas = document.getElementById("consultas");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const btnEnviar = document.getElementById("btnEnviar");
const btnHistorial = document.getElementById("btnHistorial");
const mensaje = document.getElementById("mensaje");
const cuerpoTabla = document.getElementById("cuerpoTabla");

const urlHistorial = "http://localhost:3001/historial"

function prellenarFormulario() {
    
    const usuarioDatos = JSON.stringify(localStorage.getItem("usuarioDatos"));
    if (usuarioDatos && usuarioDatos.correo) {
        correo.value = usuarioDatos.correo;
    }
}

window.addEventListener("load", prellenarFormulario);

    consultas.forEach(consulta => {
        const fila = document.createElement("tr");

        fila.innerHTML = 
            `<td>${consulta.nombre}</td>
            <td>${consulta.apellido}</td>
            <td>${consulta.consultas}</td>
            <td>${consulta.fecha}</td>
            <td>${consulta.hora}</td>
            <td>${consulta.estado || "Pendiente"}</td>`;

        const celdaBotones = document.createElement("td");

        const btnAceptar = document.createElement("button");
        btnAceptar.classList.add("btnAceptar");
        btnAceptar.textContent = "Aceptar";
        btnAceptar.addEventListener('click', () => aceptarConsulta(info.id));

        const btnRechazar = document.createElement("button");
        btnRechazar.classList.add("btnRechazar");
        btnRechazar.textContent = "Rechazar";
        btnRechazar.addEventListener('click', () => rechazarConsulta(info.id));

        celdaBotones.appendChild(btnAceptar);
        celdaBotones.appendChild( btnRechazar);

        fila.appendChild(celdaBotones);
       
        cuerpoTabla.appendChild(fila);
   });

cargarConsultas()

async function cargarConsultas() {
    let consulta = await getConsultas();
    cuerpoTabla.innerHTML = "";

    renderizarSolicitudes(consulta);
}

async function enviarConsulta() {
    if (!nombre.value || !apellido.value || !consultas.value || !fecha.value || !hora.value) {
        mensaje.textContent = "Por favor, complete todos los campos";
        return;
    }

        const nuevaConsulta = {
        nombre: nombre.value,
        apellido: apellido.value,
        consultas: consultas.value,
        fecha: fecha.value,
        hora: hora.value,
        estado:"Pendiente"
    };

    await postConsultas(nuevaConsulta);
    mensaje.textContent = "Consulta enviada con éxito"

    console.log(nuevaConsulta);  
    cargarConsultas()

    nombre.value = "";
    apellido.value = "";
    consultas.value = "";
    fecha.value = "";
    hora.value = "";
}

async function aceptarConsulta(idConsulta) {

    console.log(idConsulta);
    
    let consulta = await getConsultasById(idConsulta);
    consulta.estado = "Aceptada";

    console.log(consulta);
    
    await postHistorial(consulta); 
    await deleteConsultas(idConsulta); 
    await postConsultas(consulta, urlHistorial);
    cargarConsultas(); 
}

async function rechazarConsulta(idConsulta) {

    console.log(idConsulta);

    let consulta = await getConsultasById(idConsulta);
    consulta.estado = "Rechazada";

    console.log(consulta);

    await postHistorial(consulta); 
    await deleteConsultas(idConsulta);
    await postConsultas(consulta, urlHistorial);
    cargarConsultas(); 
}

moverConsultaAlHistorial();

async function moverConsultaAlHistorial(consulta) {
    delete consulta.id;
    
}

function verHistorial() {
    window.location.href = 'historial.html';
}

btnHistorial.addEventListener("click", verHistorial);

btnEnviar.addEventListener("click", enviarConsulta);

console.log(enviarConsulta);
console.log(postHistorial);