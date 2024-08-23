import { getUsers } from "../services/getUsers";

const correo = document.getElementById("correo");
const id = document.getElementById("id")//
const password = document.getElementById("password");
const bntInicio = document.getElementById("btnInicio");


const usuarioDatos = JSON.parse(localStorage.getItem("usuarioDatos")) || [];

bntInicio.addEventListener("click", function () {

validarUsuario ()
 async function validarUsuario() {
    const lista = await getUsers()

    for (let index = 0; index < lista.length; index++) {

        if (lista[index].correo === correo.value && lista[index].id === id.value && lista[index].password === password.value) {
           usuarioDatos = lista[index].nombre
           localStorage.setItem("usuarioDatos",(usuarioDatos))
           console.log("Usuario Registrado")
           window.location.href = "principal.html"
        }else{
         mensaje.textContent = "Usuario no encontrado"
        }
      }
   }
})










