//import { getUsers } from "../services/getUsers";

const correo = document.getElementById("correo");
const id = document.getElementById("id");
const password = document.getElementById("password");
const bntInicio = document.getElementById("btnInicio");

const datos = JSON.parse( localStorage.getItem("listaUsuarios")||[])

bntInicio.addEventListener("click",function () {

    if (correo.value.length == 0 && id.value.length == 0 && password.value.length == 0) {
        alert("Debe ingresar datos")
    }
    
  for (let index = 0; index < listaUsuarios.length; index++) {
    
        if (datos[index].correo === correo.value && listaUsuarios[index].id === id.value && listaUsuarios[index].password === password.value) {
            alert("Ingreso exitoso")
            window.location ="http://127.0.0.1:5500/Proyecto4/src/html/principal.html";
        }
    }
    
})