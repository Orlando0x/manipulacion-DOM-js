const h1 = document.querySelector("h1");


const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const calcular = document.querySelector("#calcular");
const pResultado = document.querySelector("#resultado");
const formu = document.querySelector("#form");

formu.addEventListener("submit", sumar);

h1.addEventListener("contextmenu", banner);
input1.addEventListener("focus", banner);

function banner () {
    alert("PROHIBIDO!");
}


function sumar(event){
    event.preventDefault();
    let resul = Number(input1.value) + Number(input2.value);
    pResultado.innerText = "Resultado: " + resul;
}