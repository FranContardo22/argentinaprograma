const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
    const elegir = [PIEDRA, PAPEL, TIJERAS];
    const jugadaComputadora = Math.floor(Math.random() * elegir.length);
    return elegir[jugadaComputadora];
} 
function obtenerJugadaUsuario() {
    const readline = require('readline-sync');
    const jugadaUsuario = readline.question("Elige piedra, papel o tijeras: ");
    return jugadaUsuario.toLowerCase();
}
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
        return "Empate";
    } else if ((jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS) || (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) || (jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL)) {
        return "Gana la Computadora";
    } else {
        return "Gana el Usuario";
    }
}
const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log("La computadora eligio: " + jugadaComputadora);
console.log("El usuario eligio: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);