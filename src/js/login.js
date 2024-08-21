//import { getUsers } from "../services/getUsers";

const correo = document.getElementById("correo");
const id = document.getElementById("id");
const password = document.getElementById("password");
const bntInicio = document.getElementById("btnInicio");



bntInicio.addEventListener("click",function () {

    
  for (let index = 0; index < listaUsuarios.length; index++) {
    
        if (listaUsuarios[index].correo === correo.value && listaUsuarios[index].id === id.value && listaUsuarios[index].password === password.value) {
            
            window.location ="http://127.0.0.1:5500/Proyecto4/src/html/principal.html";
        }
    }
    
})