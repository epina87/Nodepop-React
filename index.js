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

// console.log('Initial table')
// for(let i = 0; i < ROWS; i++) {
//     console.log(board[i])
// }


// TODO Generar selección de cartas de forma aleatoria.
// TODO Mostrarla por pantalla hasta que quede solucionado el juego.
// TODO Una vez terminado el juego, se mostrarán algunas estadísticas.
// TODO Intentaremos añadir un poco de inteligencia para que el juego sea más listo

function printHeading(text) {
    const pad = '='.repeat(text.length)
    console.log(`==========${pad}==========`)
    console.log(`========= ${text} =========`)
    console.log(`==========${pad}==========`)
}
function printLine(text) {
    console.log(text)
}
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
Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if ( i == 0 ) return this;
    while ( --i ) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       temp = this[i];
       this[i] = this[j];
       this[j] = temp;
    }
    return this;
}
// Función que nos sirve para poder mostrar por pantalla las cartas en filas y columnas
function printBoard(board, discovered = false) {
    for(let i = 0; i < ROWS; i++) {
        // let line = ''
        let line = []
        for(let j = 0; j < COLS; j++){
            // line = line + ' '
            // nos permite almacenar en line la carta cubierta o descubierta
            const card = board[i * COLS + j]
            if (discovered || card.discovered) {
                line.push(card.figure)
            } else {
                line.push(COVERED_CARD)
            }
            
            // line += board[i * COLS + j] // equivale a line = line + ' '
        }
        // console.log(line)
        // "\t" es un tabulador
        // "\n" es un salto de línea
        console.log(line.join('\t')) // Array.join convierta a String. String.split(separador) genera un array a partir de String
    }
}

// ------- preparación del juego
// ✅generar figuras
// TODO Mostrar el tablero inicial.
// filas del tablero
const ROWS = 3
// columnas del tablero
const COLS = 2
// figuras disponibles para las cartas
const FIGURES = ['🤓', '🎃', '💚']
const COVERED_CARD = '🃏'
printHeading('Available figures')
console.log(FIGURES)
const game = {
    // rondas
    rounds: 0,
    // tablero
    board: [],
    // nos sirve para gestionar la selección de cartas
    availableIndexes: [],
    // setupGame nos permite configurar el juego
    setupGame: function(figures) {
        // Alternativa a popular el Array board
        for(let figure of figures) {
            // TODO Se puede mejorar teniendo en cuenta que podriamos jugar con trios de cartas o cuartetos, etc
            for (let i = 0; i < 2; i++) {
                const card = {
                    figure,
                    discovered: false
                }
                this.board.push(card)
            }
            // 🍌 nos genera un problemón con las referencias!!
            /*
            const card = {
                figure,
                discovered: false
            }
            this.board.push(card)
            this.board.push(card)
            */
        }
        this.availableIndexes = this.board.map((e, index) => index)
    },
    pickSetOfCardsIndexesRandomly(){
        let cardsIndexes = []
        // elegir cartas
        for(let i = 0; i < 2; i++) {
            //mezclamos
            this.availableIndexes.shuffle()
            // pillamos una carta del tablero
            const cardIndex = this.availableIndexes.pop()
            // la ponemos en la lista de cartas seleccionadas
            cardsIndexes.push(cardIndex)
        }
        return cardsIndexes
    },
    discoverPickedCards(cardsIndexes) {
        cardsIndexes.forEach(cardIndex => {
            const card = this.board[cardIndex]
            card.discovered = true
        })
    },
    unwindPickedCards(cardsIndexes) {
        cardsIndexes.forEach(cardIndex => {
            const card = this.board[cardIndex]
            card.discovered = false
            // Necesitamos volver a poner el indice en el listado de disponibles
            this.availableIndexes.push(cardIndex)
        })
    },
    areAllCardsTheSame(cardsIndexes) {
        // let theSameFlag = false;
        // recorrer array cardsIndexes
            // si no satisface
                // theSameFlag = theSameFlag && false
            // si satisface
                // theSameFlag = theSameFlag && true
        // return theSameFlag

        // Recuperamos las cards del tablero según su índice
        const selectedCards = cardsIndexes.map(cardIndex => this.board[cardIndex])
        // 👀 esto solamente funciona si usamos como parametro 2 cartas a seleccionar
        //return selectedCards[0].figure === selectedCards[1].figure
        const firstCard = selectedCards[0]
        // 🤯 Esto NO FUNCIONA PORQUE ESTAMOS COMPARANDO OBJETOS A PELO!!
        // POR LO TANTO ESTA COMPARANDO 2 REFERENCIAS QUE SON DISTINTAS!!!!
        //return selectedCards.every(card => card.figure === firstCard.figure)
        return selectedCards.every(card => card.figure === firstCard.figure)
    }

}

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
// ✅mezclar las cartas
game.board.shuffle()
// ✅mostrar las cartas dispuestas en filas y columnas
printBoard(game.board, true)
// ------- empieza el juego
// ✅mostrar las cartas cubiertas en filas y columnas
printHeading('The memory game starts')
printBoard(game.board)
// 🟩mientras no haya terminado el juego
    // ✅mostrar la ronda en la que estamos
    printLine(`Playing round #${game.rounds}`)
    // ✅seleccionar un par de cartas cubiertas al azar
    let cardsIndexesSelected = game.pickSetOfCardsIndexesRandomly()
    
    // ✅mostar los indices de estas cartas seleccionadas
    printLine(`Selected cards indexes: ${cardsIndexesSelected}`)
    // ✅mostrar las cartas seleccionadas descubiertas en el tablero
    game.discoverPickedCards(cardsIndexesSelected)
    printBoard(game.board)
    // ✅si no son la misma figura
    if (!game.areAllCardsTheSame(cardsIndexesSelected)){
        // ✅volverlas a cubrir
        game.unwindPickedCards(cardsIndexesSelected)
        // ✅incrementar la ronda
        game.rounds++
    } 
    // ✅si son la misma figura
    // ✅mantenemos las cartas descubiertas
    
// ------- una vez terminado el juego
// 🟩mostrar que ha terminado el juego diciendo cuántas rondas hemos necesitado