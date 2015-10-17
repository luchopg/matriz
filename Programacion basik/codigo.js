// alert: funcion 
//alert(1 + "10");
var peso;
var pesoEnMarte; // CamelCase

alert("¿Quieres saber tu peso en marte?");
peso = prompt("¿Cuál es tu peso en Kg?", "70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert( "Tu peso en Marte es: " + pesoEnMarte + " Kg.");