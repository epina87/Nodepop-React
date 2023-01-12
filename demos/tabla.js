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


console.log(t)
// console.log(t.map(row => row.join(" ")))
console.table(t)
console.table(indexedTable)