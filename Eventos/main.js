
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

let idGLobal=notas[3].id
console.log(idGLobal);
for (let i= 0; i<notas.length; i++) {
    
    function pintarTarjetas(notas) {
        let contenedor = document.getElementById("Notas")
        let tarjeta = document.createElement('div')
        tarjeta.className="card"
        tarjeta.innerHTML = `
        <div ${notas[i].id} class = "card">
        </div>
        <div class="card-body">
          <input class="form-check-input" onClick="(${notas[i].id})" type="checkbox">
          <h4 class="card-title">${notas[i].titulo}</h4>
          <p class="card-text">${notas[i].texto}.</p>
          <button id="borrar" type="text" class="btn btn-primary">Borrar</button>
        </div>
        `
        contenedor.appendChild(tarjeta)
      }
      pintarTarjetas(notas)
  }
  
guardar.addEventListener("click",(agregarNota) =>{
    notas.push({
        id: idGLobal++,
        titulo: document.getElementById("titulo").value,
        texto: document.getElementById("textonota").value,
        realizada: false
    })   
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
          <input class="form-check-input" onClick="(${notas[notas.length-1].id})" type="checkbox">
          <h4 class="card-title">${notas[notas.length-1].titulo}</h4>
          <p class="card-text">${notas[notas.length-1].texto}.</p>
          <button id="borrar" type="text" class="btn btn-primary">Borrar</button>
        </div>
        `
        contenedor.appendChild(tarjeta)
        console.log(notas);
        pintarTarjetas(notas)   
})

function marcarRealizada(id) {
    for (let i = 0; i< notas.length; i++) {
        if (notas[i].id==id) {
            if (notas[i].realizada) {
                notas[i].realizada == false
            }else{
                notas[i].realizada == true
            }
        }
    }
}

console.log(notas[1]);




