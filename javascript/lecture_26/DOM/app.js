// 1. Selection

let allh1 = document.getElementsByTagName('h1')   // mention the element which you want to change in string
                                                  // gives array
// console.log(allh1);
// console.log(allh1[0]);
// console.log(allh1[1]);

// 2. manipulation

allh1[1].style.color = "orange";

allh1[1].style.backgroundColor = "purple"
allh1[1].style.border = "5px solid green"
allh1[1].style.fontSize = "70px"

// -----------------------------------------------------------------------------------------

// 2. getElementById

let idd = document.getElementById("vohra")    //jo pahle "id" hoga usko chnage karega
console.log(idd);

idd.style.color = "pink";
idd.style.border = "5px solid green"
idd.style.backgroundColor = "purple"


// DRY CODE
idd.style.cssText = `
        color : orange;
        border: 2px solid pink;
        font-size: 80px;
        background-color: yellow;
        `

// -------------------------------------------------------------------------------------------

// 3. getElementsByClassName()

let allClass = document.getElementsByClassName('sam');

// WET CODE
// allClass[0].style.cssText = `
//         color : orange;
//         border: 2px solid pink;
//         font-size: 80px;
//         background-color: yellow;
// `

// allClass[1].style.cssText =  `
//         color : orange;
//         border: 2px solid pink;
//         font-size: 80px;
//         background-color: yellow;
// `

// DRY CODE

for(let item of allClass){
    item.style.cssText = `
    color : orange;
        border: 2px solid pink;
        font-size: 80px;
        background-color: yellow;
        `
}

// -------------------------------------------------------------------------------------------

// 4. querySelector

// selects only first occurance
let tag = document.querySelector('h2')
let idd1= document.querySelector('#vohra')
let ClassEle = document.querySelector('.sam')

ClassEle.style.cssText = `
        color : orange;
        border: 2px solid pink;
        font-size: 80px;
        background-color: yellow;
`


// ---------------------------------------------------------------------------------------------

// 5. querySelectorAll()

// selects all the occurances
document.querySelectorAll('h2');
document.querySelectorAll("#vohra");
document.querySelectorAll(".sam")