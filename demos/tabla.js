const t = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const indexedTable = {
    A: [1,2,3],
    B: [4,5,6],
    C: [7,8,9]
}
console.log(t[0][0] === 1)
// podemos acceder a propiedades de obetos via notación de arrays
let indexOfTable = 'A'
console.log(indexedTable.A[0] === indexedTable[indexOfTable][0])

// para "recorrer" un objeto:
Object.keys(indexedTable).forEach(key => {
    console.log(indexedTable[key])
})


// esto no acaba de funcionar bien para poder visualizar en 2D
//console.log(t)


// console.log(t.map(row => row.join(" ")))
console.table(t)
console.table(indexedTable)