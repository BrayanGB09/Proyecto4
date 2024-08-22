import { postUsers } from "../services/postUsers";

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const password = document.getElementById("password");

const btnRegistro = document.getElementById("btnRegistro");

btnRegistro.addEventListener("click", function () {
   if (password.value.length === 0) {
      alert("Debe ingresar los datos")
   }else{
      postUsers(nombre.value, apellido.value, correo.value, password.value);  
         alert("Usuario Registrado")
   }
   
})



//traerUsuario()

//async function traerUsuario() {
    
   // const nombre = document.getElementById("nombre")
   // const correo = document.getElementById("correo")
  //  const password = document.getElementById("password")
    
  //  let nombres = await GetUsers();
   // let correos = await GetUsers();
   // let passwords = await GetUsers();

   // nombre.innerHTML = nombres[0].nombre
   // correo.innerHTML = correos[0].correo
   // password.innerHTML = passwords[0].password//
//}




//const nombre = document.getElementById("nombre");
//const email = document.getElementById("email");
//const pass = document.getElementById("pass");
//const regist = document.getElementById("regist");


//const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

//regist.addEventListener("click", function () {

  //  let lista = {
  //      nombre: nombre.value,
  //      email: email.value,
   //     pass: pass.value
   // };

   // listaUsuarios.push(lista);
  //  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

  //  window.location = "http://127.0.0.1:5500/Proyecto/login.html";

//});


