// Ejemplo de spread operator en argumentos de funciones
const suma = (...arr) => {
    return arr.reduce((prev, curr) => prev + curr, 0)
}

// console.log(suma([0,1,2,3]))
// console.log(suma([0,1,2,3, 4]))

console.log(suma(0))
console.log(suma(2,2))
console.log(suma(2,4,3))