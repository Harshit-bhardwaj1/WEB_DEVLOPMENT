
// FN DEFINATION

function samarth(){
    console.log("mai hu gian");

    return "juice pilado";
}

// FUNCTION CALLING

samarth();
console.log(samarth());
console.log(samarth());
console.log(samarth());

// ----------------------------------------------------------------------------


// parameterised function:- fn which accepts arguments

function sunio(x,y){
    console.log(y);
    return y;
}

console.log(sunio(10,"sam"), "y");


// -----------------------------------------------------------------------------

// if value of y is not provided but it exists then js-engine will give "undefined";
// if variable is not defined then it will give error

function sunio(x,y){
    console.log(x);
    console.log(y);
    console.log(x+y);
    
}

sunio(10);

console.log(typeof(NaN));   // number

console.log(0.1+0.2);     // it is difficult to convert decimal numbers to binary

// --------------------------------------------------------------------------------------------

// default parameterised function

function sunio(x=100,y=200){
    console.log(x);
    console.log(y);
    console.log(x+y);
    
}

sunio(50);

// ----------------------------------------------------------------------------------------

let person = {
    naam: "mitthu don",
    kaam: "juice pilana",
    profession: "boxing + cat walk",
    greet: function (){
        console.log("ye garreb inki kismat aachi ho jaye");
        
    }
}

console.log(person.kaam);

// in this key is pointing to the function so all the function will print. if we want the value of function this we have to add brackets
console.log(person.greet);

person.greet();


// -----------------------------------------------------------------------------------------

// "this" jis method ke andar h or wo method jis "object" ke andar h usko point karta h

let person1 = {
    naam: "mitthu don",
    kaam: "juice pilana",
    profession: "boxing + cat walk",
    greet: function (){
        console.log(`hello form ${this.naam}`);
        
    }
}
person.greet();
