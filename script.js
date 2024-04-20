let intentos = 6;
let diccionario = ['SOBRE', 'RATON', 'MAMON', 'LIBRE'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", jugar);

function intentar(intento) {
    console.log(intento)
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    const SPAN = document.createElement("span");
    ROW.className = "row";
    if (palabra === intento) {
        for (let pos in palabra){
            const SPAN = document.createElement("span");
            SPAN.className = "letter";
            SPAN.innerHTML = intento[pos];
            SPAN.style.backgroundColor = '#79b851';
            ROW.appendChild(SPAN);   
        }
        GRID.appendChild(ROW);
        terminar("<h1>GANASTE!!! &#129395;</h1");
    } else {
        intentos = intentos - 1;
        console.log("te quedan", intentos, "intentos");
        for (let pos in palabra) {
            const SPAN = document.createElement("span");
            SPAN.className = "letter";
            if (palabra[pos] === intento[pos]) {
                SPAN.innerHTML = intento[pos];
                SPAN.style.backgroundColor = '#79b851';
            } else if (palabra.includes(intento[pos])) {
                SPAN.innerHTML = intento[pos];
                SPAN.style.backgroundColor = '#f3c237';
            } else {
                SPAN.innerHTML = intento[pos];
                SPAN.style.backgroundColor = '#a4aec4';
            }
            ROW.appendChild(SPAN);
            if (intentos === 0) terminar("<h1>PERDISTE &#129402</h1>;");
        }
        GRID.appendChild(ROW);
    }

}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    let estado = document.getElementById("guesses");
    INPUT.disabled = true;
    BOTON.disabled = true;
    estado.innerHTML = mensaje;
    console.log(estado, mensaje);
}

function jugar() {
    let usuario = document.getElementById("guess-input").value;
    usuario = usuario.toUpperCase();
    intentar(usuario);
}