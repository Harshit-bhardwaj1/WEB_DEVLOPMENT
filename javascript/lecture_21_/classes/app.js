// key name and attributes name can be same in constructor

function Person(naam, umar,rang){
    this.naam = naam;
    this.age= umar
    this.favcolor = rang; 
}

let p1= new Person("sam",25,"pink");
let p2= new Person("mav",28,"brown");

console.log(p1);
console.log(p2);



// Class

class Person2{
    constructor(naam, umar,rang){
        this.naam = naam;
        this.age= umar
        this.favcolor = rang; 
    }
    
    // method
    greet(){
        console.log("good morning");
        
    }
}
let p3= new Person2("sam",25,"pink");
let p4= new Person2("mav",28,"brown");
console.log(p3);
console.log(p4);

// ----------------------------------------------------------------------------------------------

// student is child class of person2

class Student extends Person2{
    constructor(naam,umar,rang,roll){
        super(naam,umar,rang)             // used to display the properties of parent class
        this.rollno = roll;
    }
}

let p5= new Student("sam",25,"pink");
let p6= new Student("mav",28,"brown");
console.log(p3);
console.log(p4);


