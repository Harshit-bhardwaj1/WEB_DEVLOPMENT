function Sam(){

}

console.log(Sam());         // undefined
console.log(new Sam());     // sam()

// --------------------------------------------------------------

// syntax :- "=" + ";"

// function sam(){
//    this.username= "Sam";
//    this.mob = 99999; 
// }

// let p1= new sam();
// let p2= new sam();
// console.log(p1);
// console.log(p2);


// With attributes

function sam(naam, mob){
    this.username= naam;
    this.mob = mob; 

    // function
    this.greet = function(){
        console.log("good morning");
        
    }
 }
 
 let p1= new sam("sam", 99999);
 let p2= new sam("mav", 45345);
 sam.prototype.greet=function(){
    console.log("good morning");
    
 }
 console.log(p1);
 console.log(p2);
 
