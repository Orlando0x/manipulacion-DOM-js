const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion === "Free")
{
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Inicia sesion, por favor");
}

// prueba solo con if

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free")
{
    console.log("Solo puedes tomar los cursos gratis");
} 
    if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
    if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 
    if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 
/* Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. */

const sus = ["Free", "Basic", "Expert", "ExpertPlus"];
const avisos = ["Solo puedes tomar los cursos gratis",
"Puedes tomar casi todos los cursos de Platzi durante un mes",
"Puedes tomar casi todos los cursos de Platzi durante un año",
"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]

let orlando = {
    nivel: "Expert"
};
let diego = {
    nivel: "Basic"
};
let maria = {
    nivel: "Free"
};
let juan = {
    nivel: "ExpertPlus"
};

user = prompt("Cual es tu nombre?")
revisarNivel(user);

function revisarNivel(){
    if (user = "Orlando"){
        rango = orlando.nivel;
    } else if (user = "Diego"){
        rango = diego.nivel;
    } else if (user = "Maria"){
        rango = maria.nivel;
    }

for (let i = 0; i < sus.length; i++) {
    if (rango == sus[i]) {
        console.log(avisos[i])
    }

}
}























// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}




















//while
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
};

let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}











//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta;
while(respuesta != 4){
    let pregunta = prompt("¿Cuanto es 2 + 2?")
    
    if (pregunta == 4){
        alert("Felicidades! Tu respuesta es correcta");
    }else {
        alert("Incorrecto! vuelve a intentar");
    }
    respuesta = pregunta;
}









let respuesta = prompt("¿Cuanto es 2 + 2?")
if (respuesta == 4){
    alert("Felicidades! Tu respuesta es correcta");
} else {

    alert("Incorrecto! vuelve a intentar");
    respuesta = prompt("¿Cuanto es 2 + 2?");
}


while (respuesta != 4) {

    if (respuesta == 4){
        alert("Felicidades! Tu respuesta es correcta");
    } else {
        alert("Incorrecto! vuelve a intentar");
    }

}

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let nombres = ["jose", "maria", "pedro"];
function testLista(array)
{
    return array[0];
}

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let frutas = ["manzana", "platano", "Cereza", "Fresa"];

function readFrutas(array){
    for(let x of frutas){
        console.log(x); 
    }
}

for(let fruta of frutas){
    console.log(fruta); 

}

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)

let frutas = {
    modelo: "grande",
    color: "rojo"
};

function readObject(objeto)
{
    for(let key in objeto){
        console.log(objeto[key]);

    }

}

console.log(`Modelo: ${objeto.modelo}`);
console.log(`Color: ${objeto.color}`);
for(){
    console.log(objeto.modelo);
    console.log(objeto.color); 
}

//