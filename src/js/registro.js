
import { getUsers } from "../services/getUsers"
import { postUsers } from "../services/postUsers";

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const password = document.getElementById("password");

const btnRegistro = document.getElementById("btnRegistro");
const btn2 = document.getElementById("btn2")




btnRegistro.addEventListener("click", function () {
   
    crearUsuario()

    async function crearUsuario() {
        const nombreUsuario = nombre.value
        const apellidoUsuario = apellido.value
        const correoUsuario = correo.value
        const passwordUsuario = password.value

   //Recoger los valores del formulario
  
        if (!nombreUsuario || !apellidoUsuario || !correoUsuario || !passwordUsuario) {
            mensaje.textContent = "Debe llenar los espacios"


         //Valide los espacios vacios y un mensaje para avisar que se tienen que llenar los espacios 
 
        }else{
            nombre.value = " ";
            apellido.value = " ";
            correo.value = " ";
            password.value = "";
            
            let correoExistente = []
  
            const Usuarios = await getUsers ();
            correoExistente = Usuarios.filter(users => users.correo === correoUsuario);

            console.log(correoExistente);
            
        
            if (correoExistente.length > 0) {
                mensaje.textContent = "Este correo ya fue registrado";

             //valida que no se registre un correo existente  

            } else {
                response = await postUsers(nombreUsuario, apellidoUsuario, correoUsuario, passwordUsuario);
                window.location.href = "login.html"
            }
        }
    }
})

function verLogin() {
    window.location.href = 'login.html';
  }
  
  btn2.addEventListener("click", verLogin);
