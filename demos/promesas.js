const pendingPromise = new Promise((resolve, reject) => {})
console.log(pendingPromise)


const resolvedPromise = new Promise((resolve, reject) => {
    resolve('hey')
}).then( response => {
    console.log('Ha ido bien 🤓', response)
})
console.log(resolvedPromise)

const rejectedPromise = new Promise((resolve, reject) => {
    reject('💩')
}).catch(error => {
    console.error('Error!', error)
})

console.log('rejectedPromise', rejectedPromise)
setTimeout(() => {
    console.log(rejectedPromise, resolvedPromise)
}, 200)

let delayedPromise = () => new Promise((resolve, reject) => {
    const result = Math.random()
    setTimeout(() => {
        result < 0.5 ? resolve({ result, icon:'👌' }) : reject({result, icon: '💩'})
    }, result * 1000)
})

try {
    const response = await delayedPromise()
    console.log(response)
} catch (error){
    console.error(error)
}

console.log('FIIIIN')