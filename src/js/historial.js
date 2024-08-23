import { getHistorial } from "../services/getUsers";


const contenedorEstados= document.getElementById("contenedorEstados")
const contenedorEstudiantes = document.getElementById("contenedorEstudiantes")
const contenedorFecha  = document.getElementById("contenedorFecha")
const contenedorHora = document.getElementById("contenedorHora")
const contenedorConsulta = document.getElementById("contenedorConsulta")
 


traerConsultas()

async function traerConsultas() {
    let nombres = await getHistorial();

    console.log(nombres);

    nombre.innerHTML = nombres[0].nombre

        const textoConsulta = document.createElement("p")
        
        const divConsulta = document.createElement("div")
        const divEstados = document.createElement("div")
        const divEstudiantes = document.createElement("div")
        const divFecha = document.createElement("div")
        const divHora = document.createElement("div")


        textoConsulta.innerHTML = nombre.value
        contenedorConsulta.appendChild(textoConsulta)

        textoConsulta.innerHTML = apellido.value
        contenedorConsulta.appendChild(textoConsulta)

        textoConsulta.innerHTML = consulta.value
        contenedorConsulta.appendChild(textoConsulta)

        textoConsulta.innerHTML = date.value
        contenedorConsulta.appendChild(textoConsulta)

        textoConsulta.innerHTML = hora.value
        contenedorConsulta.appendChild(textoConsulta)


        contenedorConsulta.appendChild(divConsulta)

        let conca1 = nombre.value + " " + apellido.value + " " + "/" + " " + consulta.value + " " + "/" + " " + date.value + " " + "/" + " " + hora.value;
        textoConsulta.innerHTML = conca1


        divConsulta.appendChild(textoConsulta)
        
    } 
