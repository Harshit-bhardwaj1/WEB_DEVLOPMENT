let arr= [10,20,30,40];

let ret= arr.map(function(item,index){
    return item*2
})

let ret2= ret.filter(function(item,index){
    if(item>10){
        return item
    }
})

console.log(ret2);


let ret3= arr.map(function(item,index){
    arr[index]=item*2
    arr.filter(function(item,index){
        if(item>10){
            return item
        }
    })
})