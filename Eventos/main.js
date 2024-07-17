/*
let boton = document.getElementById("submit");

boton.addEventListener("click", a =>{
    document.getElementById("resultado").value = (document.getElementById("peso").value) / 
    ((document.getElementById("estatura").value*document.getElementById("estatura").value*0.0001))
    console.log(resultado.value)
})

let dolar = document.getElementById("dolar")
let peso = document.getElementById("pesos")

dolar.addEventListener('keyup', a=>{
     peso.value = a.target.value * 3800
})

peso.addEventListener('keyup', a=>{
    dolar.value = a.target.value / 3800
})
*/
//Ejercicio 3. Realizar una aplicación de notas (el front queda a gusto de cada uno).
//a. Crear un array donde vamos a guardar las notas
//b. Agregar un par de notas de prueba como la siguiente
notas = [
    nota1={
        id: 1,
        titulo: "Sacar la basura",
        texto: "mi mama me va a retar si no lo hago",
        realizada: false
    },
    nota2={
        id:2,
        titulo:"Hacer la tarea",
        texto: "Es para el lunes",
        realizada: false
    },
    nota3={
        id:3,
        titulo:"Hacer ejercicio",
        texto: "Todos los dias",
        realizada:false
    },
    nota4={
        id:4,
        titulo:"Hacer la cena",
        texto: "Todos los dias",
        realizada:false
    }
]

//c. Crear una variable idGlobal e inicializala en el mismo valor del ultimo id que creaste manualmente, usaremos esto como control de las notas.
let idGLobal=notas[3].id
console.log(idGLobal);

//d. Crear un div que va a ser el contenedor de las notas.
//e. Crear una función que pinte las notas en forma de tarjetas dentro del div contenedor.
for (let i= 0; i<notas.length; i++) {
    
    function pintarTarjetas(notas) {
        let contenedor1 = document.getElementById("Notas")
        let tarjeta = document.createElement('div')
        tarjeta.className="card"
        tarjeta.innerHTML = `
        <div ${notas[i].id} class="card-body">
          <input onClick="marcarRealizada(${notas[i].id})" type="checkbox">
          <h4 class="card-title">${notas[i].titulo}</h4>
          <p class="card-text">${notas[i].texto}.</p>
          <button id="borrarNota" onClick="borrarNota(${notas[i].id}) type="text" class="btn btn-primary">Borrar</button>
        </div>
        `
        contenedor1.appendChild(tarjeta)
      }
      pintarTarjetas(notas)
  }
//f. Sobre el div contenedor, crear una pequeña interfaz para crear nuevas notas:Un input de texto para el titulo, un textarea para el texto y 2 botones, uno para 
//guardar la nota nueva y otro para limpiar los campos.

//g. Crear una función agregarNota la cual necesitara 2 parametros: titulo y texto. La cual deberá crear un objeto de tipo nota como en el punto b 
//y agregarlo al array de notas.

//h. Al presionar el botón guardar deberá guardar en variables los valores de los inputs y verificar si no están vacíos, en cuyo caso deberá llamar a la función que agregara 
//la nueva nota y paso seguido volver a pintar las notas en la pantalla.

guardar.addEventListener("click",() =>{
    notas.push({
        id: idGLobal++,
        titulo: document.getElementById("titulo").value,
        texto: document.getElementById("textonota").value,
        realizada: false
    }), 
    document.getElementById("titulo").value=""
    document.getElementById("textonota").value=""
    idGLobal=notas[notas.length-1].id

    let contenedor = document.getElementById("Notas")
    let tarjeta = document.createElement('div')
    tarjeta.className="card"
    tarjeta.innerHTML = `
    <div ${notas[notas.length-1].id} class = "card">
    </div>
    <div class="card-body">
      <input onClick="marcarRealizada(${notas[notas.length-1].id})" type="checkbox" ${notas.realizada? "checked": ""}>
      <h4 class="card-title">${notas[notas.length-1].titulo}</h4>
      <p class="card-text">${notas[notas.length-1].texto}.</p>
      <button id="borrarNota" onClick="borrarNota() type="text" class="btn btn-primary">Borrar</button>
    </div>
    `
    contenedor.appendChild(tarjeta)
    console.log(notas);
})
//Agregar en el template de la tarjeta en la función que pinta un botón con texto “borrar nota” para borrar la nota, 
//para este caso usaremos la propiedad onClick de la etiqueta button y dentro de ella llamaremos a una función que crearemos 
//llamada borrarNota() que recibirá como parámetro el id de la misma. borrarNota(${elemento.id}).


//Crearemos la función borrarNota la cual necesitara el parámetro id. La misma deberá eliminar el elemento cuyo id sea igual al recibido por parámetro 
//y volver a pintar las notas para ver reflejado el cambio.

function borrarNota(id) {
    const elemento = document.getElementById();
    if (elemento==id) { 
      elemento.remove();
    }
    pintarTarjetas(notas);
  }

//Agregar una validación en la función que pinta las tarjetas, la cual deberá mostrar un mensaje dentro del div contenedor que diga NO HAY NOTAS PARA MOSTRAR 
//en caso de no haber elementos en el array.

function pintarTarjetas(notas) {
    const contenedorNotas = document.getElementById("Notas"); 
    contenedorNotas.innerHTML = ''; 
    if (notas.length === 0) {
      const mensaje = document.createElement("p");
      mensaje.textContent = "NO HAY NOTAS PARA MOSTRAR";
      contenedorNotas.appendChild(mensaje); 
    } else {
      notas.forEach(nota => {
      });
    }
  }
   
//Al hacer click en el botón borrar que esta junto con el botón guardar se deberán limpiar los campos de titulo y de texto.
  document.getElementById("borrar").addEventListener("click", function() {
    document.getElementById("titulo").value = "";
    document.getElementById("textonota").value = "";
  });
//

//Crear la función marcarRealizada la cual recibirá como parámetro un id y deberá buscar el elemento dentro del array y cambiar la propiedad realizada 
//por el valor contrario al que ya posee y volver a pintar los elementos en pantalla para verlo reflejado.
function marcarRealizada(id) {
    for (let i = 0; i< notas.length; i++) {
        if (notas[i].id===id) {
            if (notas[i].realizada==true) {
                notas[i].realizada == false;
            }else{
                notas[i].realizada == true;
            }
        }
    }
    
}


console.log(notas); 
