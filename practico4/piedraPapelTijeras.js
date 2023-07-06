function obtenerJugadaComputadora() {
    const elegir = ["piedra", "papel", "tijeras"];
    const jugadaComputadora = Math.floor(Math.random() * elegir.length);
    return elegir[jugadaComputadora];
} 
function obtenerJugadaUsuario() {
    const readline = require('readline-sync');
    const jugadaUsuario = readline.question("Elige piedra, papel o tijeras: ");
    return jugadaUsuario;
}
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
        return "Empate";
    } else if ((jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") || (jugadaComputadora === "papel" && jugadaUsuario === "piedra") || (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")) {
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