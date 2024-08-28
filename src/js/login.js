import { getUsers } from "../services/getUsers"

const correo = document.getElementById("correo")
const password = document.getElementById("password")
const mensaje = document.getElementById("mensaje")

const btnInicio = document.getElementById("btnInicio")
const btn1 = document.getElementById("btn1")

const usuarioDatos = JSON.stringify(localStorage.getItem("usuarioDatos")) || [];


btnInicio.addEventListener("click", function () {
 
   validarUsuario()

   async function validarUsuario() {
      
      const lista = await getUsers()

      console.log(lista);
      console.log(usuarioDatos);
       //
        for (let index = 0; index < lista.length; index++) {
   
           if (lista[index].correo === correo.value && lista[index].password === password.value) {
             let usuarioDatos = lista [index].nombre
                              
             localStorage.setItem("usuarioDatos",(usuarioDatos))
             mensaje.textContent = "¡Usuario registrado!";
             window.location.href = "principal.html"

            }else{
             mensaje.textContent = "¡Usuario no registrado!";
            }
         }  // Se recorre la lista y busca si el usuario ya esta registrado y sino esta registrado también
   } 
})

function verRegistro() {
   window.location.href = 'registro.html';
 }
 
 btn1.addEventListener("click", verRegistro);









