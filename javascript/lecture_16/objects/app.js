// let person={}

let person ={
    naam: "sam",
    umar: 100,
    favcolor : "black"
}

console.log(person.naam);
console.log(person.favcolor);
console.log(person.umar);

// TO FREEZE THE OBJECT SO THAT NO ONE CAN CHANGE
Object.freeze(person);


// to change value of key

person.naam= "maverick";

// ADD A NEW KEY

person.isMale= true;

// DELETE A KEY

delete person.favcolor

console.log(person);



// FUNCTION VS METHODs

// FUNCTION :- THE ROLE OF A FUNCTION IS TO RETURN SOMETHING (chehe hum return kare kare ya na kare lekin functon return karta h);

// M.IMP.IMP
// WHEN NOTHING IS RETURNED FROM A FUNCTION BY DEFAULT "UNDEFINED" IS RETURNED.

// METHODS :- when a function is wriiten in objects is called methodS.

let person ={

    // properties
    naam: "sam",
    umar: 100,
    favcolor : "black",

    // method
    greet: function(){
        console.log("hello");
    }
}