// function sam() {
    
// }
// console.log(sam());     // return Undefined
// console.log(new sam());  // return object because "new" keyword make objects


async function sam() {
    return 100;
}

console.log(sam());   // return Promise


async function sam1() {
    return new Promise((resolve)=> resolve("sam"))
}
console.log(sam1());  // new Promise will return
