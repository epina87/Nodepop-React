import {printBoard, printHeading, printLine} from './printer.js'
// import allPrinters from './printer.js' // peta porque no tenemos ningun "export default" en printer.js
import {FIGURES} from './data.js'
import game from './game.js'

// DONE Generar selección de cartas de forma aleatoria.
// DONE Mostrarla por pantalla hasta que quede solucionado el juego.
// TODO Una vez terminado el juego, se mostrarán algunas estadísticas.
// TODO Intentaremos añadir un poco de inteligencia para que el juego sea más listo

// una funcion que nos permite randomizar los elementos de un array
// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }

//     return array;
// }
Array.prototype.shuffle = function () {
    var i = this.length, j, temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}


// ------- preparación del juego
// ✅generar figuras
// TODO Mostrar el tablero inicial.

printHeading('Available figures')
console.log(FIGURES)


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

// ✅generar cartas con las figuras disponibles
game.setupGame(FIGURES)
printHeading('the board')

// ✅mostrar las cartas dispuestas en filas y columnas
printBoard(game.board, true)
// ------- empieza el juego
// ✅mostrar las cartas cubiertas en filas y columnas
printHeading('The memory game starts')
printBoard(game.board)
game.start()

// ------- una vez terminado el juego
// ✅mostrar que ha terminado el juego diciendo cuántas rondas hemos necesitado
printLine('')
printLine(`The game has ended! Rounds needed: ${game.rounds}`)