const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const consulta = document.getElementById("consulta")
const date = document.getElementById("date")
const hora = document.getElementById("hora")
const btnGuardar = document.getElementById("btnGuardar")
const contenedorConsulta = document.getElementById("contenedorConsulta")

btnGuardar.addEventListener("click", function () {   

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

        let conca1 = nombre.value + " " + apellido.value + " " + "/" + " " + consulta.value + " " + "/" + " " + date.value + " " + "/" + " " + hora.value
        textoConsulta.innerHTML = conca1

        divConsulta.appendChild(textoConsulta)
        divConsulta.appendChild(btnRechazar)
        divConsulta.appendChild(btnAprobar)

        btnRechazar.addEventListener("click", function () {
            divConsulta.removeChild(textoConsulta)
            divConsulta.removeChild(btnRechazar)
            divConsulta.removeChild(btnAprobar)
        })
})
