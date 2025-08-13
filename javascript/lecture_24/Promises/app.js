// new promise()
// new Promise(function(){})
// new Promose(function(resolve, reject){ })

let p1 = new Promise(function(resolve, reject){
    let data = "10 rupee"
    let err = "chala ja brother"

    resolve(data)
    reject(err)
})

p1
.then(function(d){
    console.log(d);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("mai harr baar chalunga");
})