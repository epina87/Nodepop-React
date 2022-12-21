
let result1
/**
 * Devuelve un string Hello... lo que sea
 * @param {String} name 
 * @param {String|undefined} surname 
 * @param {Number|undefined} age 
 * @returns {String}
 */
function hello1(name, surname = 'Skywalker', age = 37) {
    return `Hello ${name} ${surname}. You are ${age} years old`
}

// para poder 
result1 = hello1('') // imprime Hello  Skywalker. You are 37 years old
console.log(result1)
result1 = hello1('Jordi', undefined, 40) // imprime Hello Jordi Skywalker. You are 40 years old
console.log(result1)



let result2
const hello2 = function(name, surname = 'Skywalker', age = 37) {
    return `Hello ${name} ${surname}. You are ${age} years old`
}
result2 = hello2('') // imprime Hello  Skywalker. You are 37 years old
console.log(result2)
result2 = hello2('Jordi', undefined, 40) // imprime Hello Jordi Skywalker. You are 40 years old
console.log(result2)

////////////////////////////
////////// ARROW FUNCTIONS
////////////////////////////

let result3
const hello3 = (name, surname = 'Skywalker', age = 37) => {
    return `Hello ${name} ${surname}. You are ${age} years old`
}
result3 = hello3('') // imprime Hello  Skywalker. You are 37 years old
console.log(result3)
result3 = hello3('Jordi', undefined, 40) // imprime Hello Jordi Skywalker. You are 40 years old
console.log(result3)


let result4
/**
 * 
 * @param {String} name 
 * @param {String} surname 
 * @param {Number} age 
 * @returns {String}
 */
const hello4 = (name, surname = 'Skywalker', age = 37) => `Hello ${name} ${surname}. You are ${age} years old`
result4 = hello4('') // imprime Hello  Skywalker. You are 37 years old
console.log('result4', result4)
result4 = hello4('Jordi', undefined, 40) // imprime Hello Jordi Skywalker. You are 40 years old
console.log('result4', result4)


let result5
/**
 * 
 * @param {String} name 
 * @returns {String}
 */
const hello5 = name => `Hello ${name}`
result5 = hello5('') // imprime "Hello "
console.log('result5', result5)
result5 = hello5('Jordi', undefined, 40, {}) // imprime "Hello Jordi" e ignora los otros parámetros
console.log('result5', result5)