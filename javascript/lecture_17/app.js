// example 1

// var a=100;

// console.log(a);

// function sam(){
//     console.log("I am Sam");
    
// }
// sam();

// --------------------------------------------------

// example 2

var a=100;

function sam(){
    var b=200;
    console.log(b);
    
    function lol(){
        var c= 300;
        console.log(c);
        
    }
    lol();
    
}
console.log(a);
sam();