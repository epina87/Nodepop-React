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