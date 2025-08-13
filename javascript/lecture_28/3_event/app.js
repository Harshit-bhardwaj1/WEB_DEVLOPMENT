let btn = document.querySelector('button');

function lollipop(){
    console.log("lanlan top lollipop");
}

function icecream(){
    console.log("i scream you scream we all scream for an icecream");
    
}
btn.onclick= lollipop;
btn.onclick = icecream;    // function is overriding so this will perform beacause it is in last


// -----------------------------------------------------------------------------------------------------

// MATHOD 3
// AddEventListner :- it gives privilage to add more functions
let btm = document.querySelector('button');

function fun1(){
    console.log("happy bday");
    
}

function fun2(){
    console.log("to you");
    
}

btm.addEventListener('click', fun1);
btm.addEventListener('click', fun2);