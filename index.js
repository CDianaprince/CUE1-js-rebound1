//Obtener informacion de la forma

const nombre = document.getElementById("nombre");

const correo = document.getElementById("email");

const form = document.querySelector(".form1");

//Crear event listener para la forma

form.addEventListener('submit', (e) => {
  //Evitar la accion por defecto
  e.preventDefault();

  //Crear un objeto que tenga los valores de la forma

  const formulario = {

    name: nombre.value,
    email: correo.value,

  }

  console.log(formulario);

  //Dar la orden de submit 
  // event.submit();

});

