const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data')
        reject('something went wrong')
    }, 5000)
})

console.log('before');

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error', error);
})

//alternate
// promise.then((data) => {
//     console.log(data)
// }, ((error) => {
//     console.log('error', error);
// }))

console.log('after');

