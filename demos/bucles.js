// Ejemplo de do..while
let i = 1
do {
    console.log('Hola!', i)
    i++
} while(i < 10)


const fighters = ["Bud Spencer", "Chuck Norris", "Van Damme"] //[0, 1, 2] 
console.log('FOR')
// bucle con for desde el principio
for(let i = 0; i < fighters.length; i++) {
    const fighter = fighters[i]
    console.log(fighter)
}
// de forma decreciente desde el final
for(let i = fighters.length - 1; i >= 0; i--) { // fighters.length === 3
    const fighter = fighters[i]
    console.log(fighter)
}
// for..in traduce automáticamente a for(let i = 0; i < fighters.length; i++)
console.log('FOR..IN')
for(let i in fighters) { 
    const fighter = fighters[i]
    console.log(fighter)
}
// for..of captura directamente el elemento dentro del array
console.log('FOR..OF')
for(const fighter of fighters) {
    console.log(fighter)
}

let j = 0
while(j < 3){ // OJO PORQUE TENEMOS QUE MODIFICAR DE ALGUNA FORMA LAS VARIABLES QUE INTERVIENEN
    // EN EL CRITERIO DE EVALUACION!!!
    console.log(j)
    j++ // aseguramos que cada bucle es diferente, sino bucle infinito
} 


