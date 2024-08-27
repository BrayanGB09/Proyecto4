import { postConsultas } from "../services/postConsultas";
//import { deleteConsultas } from "../services/deleteConsultas";

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const consulta = document.getElementById("consulta")
const date = document.getElementById("date")
const hora = document.getElementById("hora")
const btnGuardar = document.getElementById("btnGuardar")
const contenedorConsulta = document.getElementById("contenedorConsulta")


//const buscador = document.getElementById("buscador");
//const btnBuscar = document.getElementById("btnBuscar");



btnGuardar.addEventListener("click", function () {   

    crearUsuario()

    async function crearUsuario() {
        const nombreUsuario = nombre.value
        const apellidoUsuario = apellido.value
        const consultaUsuario = consulta.value
        const dateConsulta = date.value
        const horaConsulta = hora.value
  
  
        if (!nombreUsuario || !apellidoUsuario || !consultaUsuario || !dateConsulta || !horaConsulta) {
            mensaje.textContent = "Debe llenar los espacios";
            return;
 
        } else {
            mensaje.textContent = "¡Consulta registrada correctamente!"
            response = await postConsultas(nombreUsuario, apellidoUsuario, consultaUsuario, dateConsulta, horaConsulta);
               
            }
        }

        const textoConsulta = document.createElement("p")
        const btnRechazar = document.createElement("button")
        const btnAprobar = document.createElement("button")
        const divConsulta = document.createElement("div")

        btnRechazar.innerHTML = "Rechazar"
        btnAprobar.innerHTML = "Aprobar"

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

        let conca1 = nombre.value + " " + apellido.value + " " + "/" + " " + consulta.value + " " + "/" + " " + date.value + " " + "/" + " " + hora.value + " " + "/" + " " + "Pendiente";
        textoConsulta.innerHTML = conca1

        divConsulta.appendChild(textoConsulta)
        divConsulta.appendChild(btnRechazar)
        divConsulta.appendChild(btnAprobar)

        btnRechazar.addEventListener("click", function () {
            divConsulta.removeChild(textoConsulta)
            divConsulta.removeChild(btnRechazar)
            divConsulta.removeChild(btnAprobar)
        })
        
        document.addEventListener("keyup", (e)=>{ 
            if (e.target.matches(".buscador")){
                document.querySelectorAll(".input").forEach((tarjeta) => {
                    tarjeta.textContent.toLocaleLowerCase().includes(e.target.
                    value)?tarjeta.classList.remove("filter"): tarjeta.classList.add("filter");
                });
                if (e.key === "Escape") {
                    e.target.value = "";
                }
            }
        })
})

