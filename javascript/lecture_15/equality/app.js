// ques:-
// Equalty operator

// "==" :- general equality  (data type check nhi hota)

// "===" :- strict equaltiy  (data type check hota h)


// let a= 1 == true
// console.log(a);


// let a=10 === "10"
// console.log(a);



// if(false){
//     console.log("i am don");
// }
// else if(true){
//     console.log("i am chota don");
// }
// else{
//     console.log("i am not a chota don");
// }


// input 

let a= prompt("enter the number");
if(a<18){
    console.log("ishq ki gali vich no entry");
}
else if(a>=18 && a<=25){
    console.log("kundi mat kharkao raja ")
}
else{
    console.log("pile pile oo marjani");
}


// short circuiting 

// mtlb agar attendance defined nhi to to bhi error nhi aayega agar marks true h to aise "&&" me error nhi aayega
// agar pahli condition hi false ho to 

let marks =50;  //33

if(marks>=33 || attendance>=75){
    console.log("pappu pass hogya");
}
else{
    console.log("pappu can't pass hogya");
}