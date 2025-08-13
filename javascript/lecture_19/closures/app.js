function a(){
    var ex=10;
    var ex2=100;
    function b(){
        console.log(ex2);
    }
    return b
}

let returnedval = a();
console.log(returnedval);
returnedval();



// function fun(){
//     var a=10;
//     var b=20;
//     function foo(){
//         console.log(a);
//         console.log(b);
//     }
//     foo();
// }
// fun();

// function fun(){
//     var a=10;
//     var b=20;
//     function foo(){      // fn create hote closure bn gya tha phir chahe hum ab usse return kare ya call kare
//         var c=50;
//         a++;             // ye jo value chnage huyi h ye closure ki huyi h naki jahan hume create kari h
//         b++;               
//         console.log(a);
//         console.log(b);
//     }
//     return foo;
// }
// var f=fun();
// var f1=fun()
// // console.log(f);
// f(); // 11 , 21

// f();  // 12, 22

// f1(); // 11, 21
// f1()  // 12, 22

 
// -----------------------------------------------------------------------------------------------------------------

function outer(){
    var a=10;
    function inner(){
        a++;
        var b=20;
        function innermost(){
            a++;
            b++;
            console.log(a);
            console.log(b);
            
        }
        return innermost;
    }
    return inner;
} 
let f12= outer();    // f1-------> inner
let f11= f12();     // f11 ------> innnermost
f11();

let f13=f12();
f13();
// Note:= jiska closure pahle se bn chuka h uska dobara se nhi banega uska reference share hoga.


// -------------------------------------------------------------------------------------------------------------------

// USAGE 

// 1. Private variable

function private(){
    let secret_variable=0;
    function getsecret(){
        secret_variable++;
        console.log(secret_variable);
    }
    return getsecret;
}

let fg=private();
f(); // 1
f(); // 2