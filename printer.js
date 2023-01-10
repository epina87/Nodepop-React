import { ROWS, COLS, COVERED_CARD } from "./data.js" // necesita la terminación .js!!!

export function printHeading(text) {
    const pad = '='.repeat(text.length)
    console.log(`==========${pad}==========`)
    console.log(`========= ${text} =========`)
    console.log(`==========${pad}==========`)
}
export function printLine(...text) {
    console.log(...text)
}
// Función que nos sirve para poder mostrar por pantalla las cartas en filas y columnas
export function printBoard(board, discovered = false) {
    for (let i = 0; i < ROWS; i++) {
        // let line = ''
        let line = []
        for (let j = 0; j < COLS; j++) {
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