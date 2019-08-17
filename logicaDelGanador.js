var inputUno;
var inputDos;
var inputTres;
var inputCuatro;
var inputCinco;
var inputSeis;
var inputSiete;
var inputOcho;
var inputNueve;

// horizontal 
if (inputUno === inputDos === inputTres) {
    alert("Hay un ganador: ", inputUno);
}
if (inputCinco === inputCuatro === inputSeis) {
    alert("Hay un ganador: ", inputCinco);
}
if (inputSiete === inputOcho === inputNueve) {
    alert("Hay un ganador: ", inputSiete);
}

// vertiucal 
if (inputUno === inputCuatro === inputSiete) {
    alert("Hay un ganador: ", inputUno);
}
if (inputDos === inputCinco === inputOcho) {
    alert("Hay un ganador: ", inputDos);
}
if (inputTres === inputSeis === inputNueve) {
    alert("Hay un ganador: ", inputTres);
}

// cruzado
if (inputUno === inputCinco === inputNueve) {
    alert("Hay un ganador: ", inputUno);
}
