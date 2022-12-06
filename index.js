
const nombre = document.getElementById('fnombre');/*.value;
console.log(nombre);*/

const telefono = document.getElementById('telefono');/*.value;
console.log(lname);*/

const work = document.getElementById('trabajo');/*.value;
console.log(correo);*/

const correo = document.getElementById('correo');

const descripcion = document.getElementById('info');

const form = document.getElementById('form1');/*.value;
console.log(form);*/

const contenedor = document.getElementById('contenedor');





form.addEventListener('submit', (e) => {

    e.preventDefault();

   const formulario = { 

      name: nombre.value,
      phone: telefono.value,
      trabajo: work.value,
      email: correo.value,
      Informacion: descripcion.value, 
   }

   const { name, phone, trabajo, email, Informacion } = formulario

   console.log(formulario);

   /////////////////////////////////

   const cuadroHtmlconInfo = crearCuadroDeForma(name, phone, trabajo, email,Informacion)


   contenedor.insertAdjacentHTML('beforeend', cuadroHtmlconInfo);


});

function crearCuadroDeForma(name, phone, trabajo, email, Informacion) {
  const cuadroHtml = 
  `
  <div class="contenedor">

    <div class="tex">
      <h4>Name</h4>
      <p> ${name}</p>
      
      <p>${trabajo}</p>
    </div>
    <div class="div-backg">
      <span> <h3>Informacion</h3></span>
      <div class="div-backg__div">
        <h4>Phone</h4><br>
        <p>${phone}</p>
        <h4>Email</h4><br>
        <p>${email}</p>
      </div>
      <h4>Sobre ti</h4>
      <p>${Informacion}</p>
    </div>
    
  </div>
  `;
   
  
  return cuadroHtml;
  
}

const footer = document.getElementById('footer');


