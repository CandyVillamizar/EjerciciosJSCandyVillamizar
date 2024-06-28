//Ejercicio1
//Realizar un programa que permita el ingreso de un numero y muestre su tabla de
//multiplicar (Los primeros 10 multiplos).

let numero1 = prompt("ingresa un numero")
let contador = 1

while (contador<=10) {
    console.log(`${numero1}x${contador}=${numero1*contador}`);
    contador++
}

//Ejercicio2
//Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
//acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0


let numero2
let array2=[]
do {
    numero2=prompt("Ingresa un numero")
    array2.push(numero2)
    console.log(array2);

} while (numero2!=0);


//Ejercicio3
//Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
//variable guardar un numero que este en el rango 1 - 100. La persona debera poder
//ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
//valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
//nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
//cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
//que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
//felicitaciones y decirle en cuantos intentos lo ha realizad

//let numeroIncognita = 7

//let numeroIngresado = prompt("Ingrese un numero del 1-10")

//if (numeroIngresado<numeroIncognita){
//    alert("El numero ingresado es menor");
//}else if (numeroIngresado>numeroIncognita){
//   alert("El numero ingresado es mayor");
//}else{
//    alert("Adivinaste");
//}  

//let numeroIngresado1 = prompt("Ingrese un numero del 1-10")

//if (numeroIngresado1<numeroIncognita){
//    alert("El numero ingresado es menor");
//}else if (numeroIngresado1>numeroIncognita){
//    alert("El numero ingresado es mayor");
//}else{
//    alert("Adivinaste");
//}  

//let numeroIngresado2 = prompt("Ingrese un numero del 1-10")

//if (numeroIngresado2<numeroIncognita){
//    alert("El numero ingresado es menor");
//}else if (numeroIngresado2>numeroIncognita){
//    alert("El numero ingresado es mayor");
//}else{
//    alert("Adivinaste");
//}


//Ejercicio4
//Realizar un programa que permita decir si un numero es primo. Un numero es primo
//si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
//Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
//como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
//numero ya no es primo


let intro4 = parseInt(prompt("Ingresa un numero"))
let numeros4;
let array10=[]


for (numeros4=0;numeros4<= intro4/2; numeros4++) {
    if (intro4 % numeros4 === 0) {
        array10.push(numeros4)
        console.log(array10);
            if (array10.length<=2) {
                let numeroPrimo = intro4 +"Es primo" 
                console.log(numeroPrimo);
            }else {
            console.log(intro4+"no es primo");
            }
    }
}


//Ejercicio5
//Realizar un programa que permita dado un numero, mostrar todos sus divisores

let intro5 = prompt("Escribe un número");
let numeros;

for (numeros=2;numeros < intro5/2; numeros++) {
    if (intro5 % numeros === 0) {
        console.log(numeros," lo divide ");
    }
}


//Ejercicio6
//Dado un array de 10 elementos, realizar un programa que recorra ese array y
//muestre un mensaje por consola con cada uno de los elementos del array.

let objeto6 = [1,2,3,4,5,6,7,8,9,10]

for (let i= 0; i < objeto6.length; i++) {
    let mensaje = objeto6[i]+" soy entero"
    console.log(mensaje);
}

//Ejercicio7
//Dado un array de 10 numeros, realizar un programa que muestre por consola el
//doble de cada uno de los elementos.

let objeto7 = [1,2,3,4,5,6,7,8,9,10]
for (let i= 0; i < objeto7.length; i++) {
    let mensaje = objeto7[i]*2
    console.log(mensaje);
}


//Ejercicio8
//Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
//que muestre un mensaje de presentacion por cada elemento del array

let familia = [
    {
        nombre: "candy",
        apellido: "villamizar",
        edad: 33,
        mascotas: true
    },
    {
        nombre: "pepito",
        apellido: "perez",
        edad: 31,
        mascotas: true
    },
    {
        nombre: "Any",
        apellido: "tamara",
        edad: 11,
        mascotas: false
    },
    {
        nombre: "sandy",
        apellido: "jaramillo",
        edad: 12,
        mascotas: true
    },
    {nombre: "juana",
        apellido: "mina",
        edad: 33,
        mascotas: false
    },
]

for (let i= 0; i < familia.length; i++) {
    let presentacion = "Hola mi nombre es "+ familia[i].nombre +" mi apellido es " + familia[i].apellido +" tengo "+ familia[i].edad + " años "+" y "+ familia[i].mascotas+" mascotas "
    console.log(presentacion);
}

//Ejercicio9
//Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//muestre los numeros impares
//let objeto = [11,21,3,46,5,6,7,8,9,10]

for (let i= 0; i < objeto9.length; i++) {
    if (objeto9[i]%2!==0) {
       let numeroImpar = objeto9[i]
       console.log(numeroImpar+" es impar");
   }
}

//Ejercicio10
//Realizar un programa que permita la entrada de numeros y calcule la suma de los
//numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
//el usuario ingresa un 0

let numero4
let numero5

do {
    numero4=parseInt(prompt("ingresa un numero"))
    console.log(numero4);
    numero5=parseInt(prompt("ingresa un numero"))
    console.log(numero5);
    if (numero4%2==0 && numero5%2==0) {
        let suma = numero4+numero5
        console.log("la suma de los numeros pares anteriores es "+suma);
    }else if(numero4%2!=0 && numero5%2!=0){
        let sumaImpares = numero4 + numero5
        console.log("la suma de los numeros impares anteriores es "+sumaImpares);
    }else{
        console.log("No se pueden sumar");
    }
} while (numero4!=0 || numero5 !=0);


//Ejercicio11
//Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas grande

let objeto11 = [11,21,3,46,5,6,7,8,9,10]
let numeroMayor = objeto11[0]

for (let i= 0; i < objeto11.length; i++) {
    if (numeroMayor<objeto11[i]) {
        numeroMayor=objeto11[i]
        console.log(numeroMayor+" Es el mayor");
    }
}


//Ejercicio12
//Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas chico.

let objeto = [11,21,3,4,5,6,7,8,9,10]
let numeroMenor = objeto[0]

for (let i= 0; i < objeto.length; i++) {
    if (numeroMenor>objeto[i]) {
        numeroMenor=objeto[i]
        console.log(numeroMenor+" Es el menor");
    }
}

//Ejercicio13
//Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
//ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
//manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
//un empate. Caso contrario mostrar un mensaje con el nombre de la persona
//ganadora

let jugador1 = prompt("Ingresar nombre")
let jugador2 = prompt("Ingresar nombre")
let ganador = false

while (ganador == false) {
    let juegoJugador1 = prompt("Ingresa tu opcion(1-piedra, 2-papel o 3-tijera")
    let juegoJugador2 = prompt("Ingresa tu opcion(1-piedra, 2-papel o 3-tijera")
    if (juegoJugador1=="1" && juegoJugador2=="3"|| juegoJugador1=="2" && juegoJugador2=="1"||juegoJugador1=="3" && juegoJugador2=="2"){
        alert("juegoJugador1 ha ganado")
        ganador=true
    }else if (juegoJugador2=="1" && juegoJugador1=="3"|| juegoJugador2=="2" && juegoJugador1=="1"||juegoJugador2=="3" && juegoJugador1=="2"){
        alert("juegoJugador2 ha ganado")
        ganador=true
    }else{
        console.log("Empate");
    }
}

//Ejercicio14
//Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

let asterisco = "* "
for (let i=1; i <= 5; i++) {
    console.log(asterisco);
        asterisco= asterisco + "* "
}

//Ejercicio15
//Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
//pero invertido

let asterisco1 = "* * * * *"
for (let i=5; i >= 1; i--) {
    console.log(asterisco1);
    asterisco1 = asterisco1.substring(0,asterisco1.length-2)
}

