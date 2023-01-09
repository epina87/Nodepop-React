// ✅filas 
// cartas (repetidas, iguales...)
// ✅columnas
// Jugador
// puntuación (si las cartas son iguales)
// contadores
// turnos
// ✅figuras
// mensajes
// celdas vacías
// simular cartas seleccionadas


// TODO Mostrar el tablero inicial.
// filas del tablero
const ROWS = 3
// columnas del tablero
const COLS = 2
// figuras disponibles para las cartas
const FIGURES = ['🤓', '🎃', '💚']

console.log('Available figures: ', FIGURES)
// tablero
let board = []
// por cada fila
// for(let i = 0; i < ROWS; i++) {
//     // una fila cualquiera
//     let row = []
//     // por cada columna
//     for(let j = 0; j < COLS; j++) {
//         //console.log(j, i)
//         row[j] = FIGURES[i]
//     }
//     board[i] = row
// }

// for(let i = 0; i < ROWS * COLS / 2; i++) { // 3 * 2 / 2 === 3, la misma dimensión que FIGURES.length
//     for (let j = 0; j < 2; j++) { // Por cada figura, insertamos 2 veces en el mazo
//         // board[j + i * ROWS] = FIGURES[j] // intentadlo vosotros
//         const figure = FIGURES[i]
//         board.push(figure) // Si solamente queremos añadir elementos al array, lo hacemos con Array.push
//     }
// }
// Alternativa a popular el Array board
for(let figure of FIGURES) {
    // TODO Se puede mejorar teniendo en cuenta que podriamos jugar con trios de cartas o cuartetos, etc
    board.push(figure)
    board.push(figure)
}
console.log('the board', board)

// Función que nos sirve para poder mostrar por pantalla las cartas en filas y columnas
function printBoard(board) {
    for(let i = 0; i < ROWS; i++) {
        let line = ''
        for(let j = 0; j < COLS; j++){
            // line = line + ' '
            line += board[i * COLS + j] // equivale a line = line + ' '
        }
        console.log(line)
    }
}

// una funcion que nos permite randomizar los elementos de un array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

board = shuffle(board)
printBoard(board)
// console.log('Initial table')
// for(let i = 0; i < ROWS; i++) {
//     console.log(board[i])
// }


// TODO Generar selección de cartas de forma aleatoria.
// TODO Mostrarla por pantalla hasta que quede solucionado el juego.
// TODO Una vez terminado el juego, se mostrarán algunas estadísticas.
// TODO Intentaremos añadir un poco de inteligencia para que el juego sea más listo


// ------- preparación del juego
// generar figuras
// generar cartas con las figuras disponibles
// mezclar las cartas
// mostrar las cartas dispuestas en filas y columnas
// ------- empieza el juego
// mostrar las cartas cubiertas en filas y columnas
// mientras no haya terminado el juego
    // mostrar la ronda en la que estamos
    // seleccionar un par de cartas cubiertas al azar
    // mostar los indices de estas cartas seleccionadas
    // mostrar las cartas seleccionadas descubiertas en el tablero
    // si son la misma figura
        // mantenemos las cartas descubiertas
    // si no son la misma figura
        // volverlas a cubrir
        // incrementar la ronda
// ------- una vez terminado el juego
// mostrar que ha terminado el juego diciendo cuántas rondas hemos necesitado