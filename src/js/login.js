import { getUsers } from "../services/getUsers"

const correo = document.getElementById("correo")
const password = document.getElementById("password")
const btnInicio = document.getElementById("btnInicio")
const mensaje = document.getElementById("mensaje")

const usuarioDatos = JSON.stringify(localStorage.getItem("usuarioDatos")) || [];

btnInicio.addEventListener("click", function () {

   validarUsuario()

   async function validarUsuario() {
      
      const lista = await getUsers()

      console.log(lista);
      console.log(usuarioDatos);

        for (let index = 0; index < lista.length; index++) {
   
           if (lista[index].correo === correo.value && lista[index].password === password.value) {
             let usuarioDatos = lista [index].nombre
                              
             localStorage.setItem("usuarioDatos",(usuarioDatos))
             mensaje.textContent = "¡Usuario registrado!";
             window.location.href = "prueba.html"

            }else{
             mensaje.textContent = "¡Usuario no registrado!";
            }
         }
   }  
})









