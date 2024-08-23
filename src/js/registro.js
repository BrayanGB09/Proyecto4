import { getUsers } from "../services/getUsers"
import { postUsers } from "../services/postUsers";

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const password = document.getElementById("password");

const btnRegistro = document.getElementById("btnRegistro");

btnRegistro.addEventListener("click", function () {
   
    crearUsuario()

    async function crearUsuario() {
        const nombreUsuario = nombre.value
        const apellidoUsuario = apellido.value
        const correoUsuario = correo.value
        const passwordUsuario = password.value
  
  
        if (!nombreUsuario || !apellidoUsuario || !correoUsuario || !passwordUsuario) {
            mensaje.textContent = "Debe llenar los espacios"
 
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

            } else {
                response = await postUsers(nombreUsuario, apellidoUsuario, correoUsuario, passwordUsuario);
                window.location.href = "login.html"
            }
        }
    }
})


