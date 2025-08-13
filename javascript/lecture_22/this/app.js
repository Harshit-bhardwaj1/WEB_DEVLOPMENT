// function calling

// function sam(){
//     console.log(this);        // window 
    
// }

// sam();


// method calling

let obj={
    a: 10,
    fn: function(){
        console.log(this);
        
    }
}

obj.fn();



// method and function 

let obj1={
    a: 10,
    fun: function(){
        console.log(this,"1");             // obj
        function ans(){
            console.log(this,"2");     // window
            
        }
        
    }
}

obj1.fun();

// -------------------------------------------------------------------------


let obj2={
    a: 10,
    fun: function(){
        console.log(this,"1");             // window
        function answ(){
            console.log(this,"2");     // window
            
        }
        
    }
}

let ans= obj2.fun;           // isme function call nhi ho raha wo ans pe depend kar raha h
ans();


// -------------------------------------------------------------------------------------


// constructor calling

function Sam(naam){
    this.naam = "baba bangali";
    this.kaam = " varishikaran";
}

let p1 = new Sam("baba");        // "this" will point to this 
let p2= new Sam("bangali");      // now "this" will point to this beacause it is newly created


// ---------------------------------------------------------------------------------------------

// M.M.M.M.IMP  with exxmple

// indirect calling 
// 1. call()   :- takes commma separated argument
// 2. apply()  :- takes array like argument
// 3. bind()   :- creates a copy of that fn

let obj4 = {
    a: 10,
    fn: function(x,y,z){
        console.log(this.a,x,y,z);
        
    }
}

let obj5={
    a:50
}
obj4.fn()
//obj5.fn();    // error beacuse fn does not exists in obj5.

obj4.fn.call(obj5);       // isme fn nhi chlata blki call andar jo likha h wo chalata h

obj4.fn.call(obj5,10,20,30);       // takes comma separated
obj4.fn.apply(obj5,[10,20,30]);     // takes array like

// creates a copy ofthat fn
// copy bana raha h to kahi store karna padega phir usse call karenge.

let fncopy = obj4.fn.bind(obj,10,20,30)
fncopy()


// ------------------------------------------------------------------------------------------------


// arrow function calling

function sqr(x){
    return x*x;
}
console.log(sqr(7));

// arrow me function banate time function keyword nhi likhte koi bhi declarative likhte h

// type 1

let sqr1 = (x) =>{
    return x*x
}


// type 2 
// agar sirf return h to hum ek hi line me likh sakte h

let sqr2 = (x) => x*x


// type 3 
// agar sirf ek hi argumenet h to parenthesis hata sakte h

let sqr3 = x => x*x

console.log(sqr(7));

// ---------------------------------------------------------------------------

// arrow function calling

// Q.1
let obj6 = {
    a:1,
    fun: function(){
        console.log(this);              // object
        let ans = () => {
            console.log(this);          // object
            
        }
        ans()
    }
}
obj6.fun();       // object calling

// Q.2
let obj7 = {
    a:1,
    fun: function(){
        console.log(this);        // window
        let ans = () => {
            console.log(this);    // window
            
        }
        ans()
    }
}

let out = obj7.fun
out()                     // direct calling


// Q.3

let obj8 = {
    a:1,
    fun: () => {
        console.log(this);         // window
        let ans = () => {
            console.log(this);     // window
            
        }
        ans()
    }
}
obj8.fun();     // object ka this keyword window ko pint karta h