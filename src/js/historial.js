import { getConsultas,getHistorial } from "../servicios/getConsultas";


document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const cuerpoTablaHistorial = document.getElementById("results");

  const data = [];

  buscador.addEventListener("input", () => {
      const query = buscador.value.toLowerCase();
      cuerpoTablaHistorial.innerHTML = '';

      if (query) {
          const filtrarData = data.filter(item => item.toLowerCase().includes(query));
          filtrarData.forEach(item => {
              const li = document.createElement("li");
              li.textContent = item;
              cuerpoTablaHistorial.appendChild(li);
          });
      }
  });
});

cargarHistorial() 

async function cargarHistorial() {
    const historial = await getHistorial();
    console.log( cuerpoTablaHistorial);
    cuerpoTablaHistorial.innerHTML = "";
    historial.forEach(consulta => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${consulta.nombreUsuarioUsuario}</td>
            <td>${consulta.apellidoUsuario}</td>
            <td>${consulta.consultaUsuario}</td>
            <td>${consulta.dateConsulta}</td>
            <td>${consulta.horaConsulta}</td>
            <td>${consulta.estado || 'Pendiente'}</td>
        `;
        cuerpoTablaHistorial.appendChild(fila);
    });
}





  ///let input, filter, i;
    //search = document.getElementById("buscador");
    //filter = input.value.toUpperCase();  

