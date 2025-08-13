// imp

// fetch with Promise

fetch("https://api.tvmaze.com/search/shows?q=girls")
.then(function(data){
    return data.json()
})
.then(function(res){
    console.log(res);
})


// ----------------------------------------------------

// fetch with async

async function callAPI() {
    let data = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    let resp = await data.json();
    console.log(resp);
    
}

callAPI();


// --------------------------------------------------------

// Axios with Promise

axios.get("https://api.tvmaze.com/search/shows?q=girls")
.then(function(res){
    console.log(res.data);   // .data likhne se hume sirf data mil jayega bss. json() nhi padega isme.
                             // Array of object milta h
})


// ---------------------------------------------------------------------

// Axios with async 

async function call() {
    let data = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
    console.log(data.data);
    
}