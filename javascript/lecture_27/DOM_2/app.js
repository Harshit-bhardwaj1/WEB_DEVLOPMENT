let h1= document.querySelector('h1')
let h2= document.querySelector('h2')

// these are not function so these will not be called

console.log(h2.innerText);   // getter
// h2.innerText = "mai hu gian"  // setter  but tags cannot be read.

h2.innerHTML = "<h2> mai hu gyan</h2>"   // setter but in this tags can be read
console.log(h2.textContent);

