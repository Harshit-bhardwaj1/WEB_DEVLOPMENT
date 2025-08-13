// function add(a){
//     return function add2(b){
//         return function add3(c){
//             return function add4(d){
//                 return function add5(e){
//                     return a+b+c+d+e;
//                 }
//             }
//         }
//     }
// }

// console.log(add(6)(7)(4)(5)(7));


// PARTIAL APPLICATION :- when we use limited argument instead of complete arguments, then the output is called partial application.

// function add(a){
//     return function add2(b){
//         return a+b;
//     }
// }

// let add=add(5);
// let a





// ------------------------------------------------------------------------------------------------------------

const allGlobalParcels =[
    {
        created:234567894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234566694000,
        location:"Us",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234537894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    }
]

function sortParcelBycountry(data,country,order){
    const countryParcel= data.filter(d=>d.location==country);
    const sortedResult =countryParcel.sort((a,b)=>{
        if(order=="asc"){
            return a.created-b.created;
        }
        return b.created-a.created
    })
    return sortedResult;
    
}
console.log(sortParcelBycountry(allGlobalParcels,"India","asc"));
console.log(sortParcelBycountry(allGlobalParcels,"India","dsc"));

// ------------------------------------------------------------------------------------------------------------

// USing CURRYING FUNCTION

function data(data){
    return function country(country){
        const countryParcel= data.filter(d=>d.location==country);
        return function order(order){
            const sortedResult =[...countryParcel].sort((a,b)=>{
                if(order=="asc"){
                    return a.created-b.created;
                }
                return b.created-a.created
            })
            return sortedResult;
        }
    }
}

let order=data(allGlobalParcels)("India");
console.log(order("asc"));
console.log(order("des"));

// let arr =["1","123","2","234","1111"];
// console.log(arr.sort(function(a,b){ return a-b}));

