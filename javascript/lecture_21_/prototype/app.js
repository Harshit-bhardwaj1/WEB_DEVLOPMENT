let obj={
    a:10,
    fn : function(){
        console.log("hello");
        
    }
}

console.log(obj.a);
console.log(obj.onj.sam);  // undefined

obj.fun()  // error
console.log(obj.toString());


// __proto__ = denter proto
// which tell who is fallback source

//  obj.proto             === obj                       // false
//  obj.__proto__         === Object.prototype          // true
//  obj.__proto__.__proto === Null                      // true


// let arr=[1,2,3];

//  arr.__proto__         === arr                     // false
//  arr.__proto__         === Array.prototype         // true
//  arr.__proto__.__proto === Object.prototype        // true


// let str= "sfdjh";

//  str.__proto__         === str                       // false
//  str.__proto__         === String.prototype          // true
//  str.__proto__.__proto === Object.prototype          // true


