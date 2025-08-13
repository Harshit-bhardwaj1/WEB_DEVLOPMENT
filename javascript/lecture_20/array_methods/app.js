let arr = [10,20,30,45];

// arr.forEach();
// arr.forEach(function(){});

let ret = arr.forEach(function(item,index){
    console.log(item*item);
    // return item*item;
});

console.log(ret);





// map

let ret2= arr.map(function(item,index){
    return item+index;
});

console.log(ret2);




// filter

let ret3= arr.filter(function(item,index){
    if(item%10==0){
        return item;
    }
});

console.log(ret3);
