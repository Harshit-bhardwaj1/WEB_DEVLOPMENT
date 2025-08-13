// ARRAY:- collection of dissimiliar(heterogenous) type of data
//     DS + ORDERED


// let arr= [];

let arr= [0, true, "sam",40, undefined, null];

console.log(arr);


// 2-D ARRAY

let arr1= [10,"sam",5,[10,[6000,5000],30],true];

console.log(arr1[3]);
console.log(arr1[3][1]);
console.log(arr1[3][1][1]);



// OBJECT := collection of properties (key:value) pair , we can separate by ",",
// obj are unordered

// m.m.m.imp
// keys are stored as string behind the (screen)computer in JS. 
// if we have to access keys like array we have to write it like string

// let oBj={};

let sam = {
    naam: "sam",
    umar: 90,
    favcolor: "black",
    isMale: true
}
console.log(sam);

console.log(sam["umar"]);

// preferred this
console.log(sam.umar);
console.log(sam.favcolor);

