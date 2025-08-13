// array :- iterable items 
// iterable items uses FOR-OF LOOP

// objects :- non.iterable items
// non-iterable items uses FOR-IN loop


let arr = [10,20,30,40,50];

for(let item of arr){
    console.log(item);
}


let obj={
    a:10,
    b:20,
    c:30
}

for(let item in obj){
    console.log(item);  // it will keys

    console.log(obj.item);  // it will give undefined because it searches item as a key in obj

    console.log(obj[item]); // correct way to find the value in for in loop
    
}