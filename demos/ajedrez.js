console.log('B', 'N', 'B', 'N', 'B', 'N', 'B', 'N')
console.log('N', 'B', 'N', 'B', 'N', 'B', 'N', 'B')
console.log('B', 'N', 'B', 'N', 'B', 'N', 'B', 'N')
console.log('N', 'B', 'N', 'B', 'N', 'B', 'N', 'B')
console.log('B', 'N', 'B', 'N', 'B', 'N', 'B', 'N')
console.log('N', 'B', 'N', 'B', 'N', 'B', 'N', 'B')
console.log('B', 'N', 'B', 'N', 'B', 'N', 'B', 'N')
console.log('N', 'B', 'N', 'B', 'N', 'B', 'N', 'B')

console.log()
console.log()
console.log()
console.log()
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')

// fila par
const oddRow = 'B N B N B N B N'
// fila impar
const evenRow = 'N B N B N B N B'



console.log()
console.log()
console.log()
console.log()
console.log(oddRow)
console.log(evenRow)
console.log(oddRow)
console.log(evenRow)
console.log(oddRow)
console.log(evenRow)
console.log(oddRow)
console.log(evenRow)

console.log()
console.log()
console.log()
console.log()
// repetir 4 veces imprimir una par y una impar
for(i = 0; i < 4; i++) {
    console.log(oddRow)
    console.log(evenRow)
}







// muestra 8 veces
for(i = 0; i < 8; i++) {
    if (i % 2 === 0) { // entrará cuando i sea 0, 2, 4, 6
        // para un índice par
        console.log(oddRow)
    } else {           // entrará cuando i sea 1, 3, 5, 7
        // para un índice impar
        console.log(evenRow)
    }
}

const B = 'B'
const N = 'N'
console.log()
console.log()
console.log()
console.log()
console.log()
for (let i = 0; i < 8; i++) {
    let fila = '' // esto es diferente de undefined y de null y de 0
    for(let j = 0; j < 8; j++) {
        if ((j + i) % 2 === 0) {
            fila += B + ' '
        } else {
            fila += N + ' '
        }
    }
    console.log(fila)
}
