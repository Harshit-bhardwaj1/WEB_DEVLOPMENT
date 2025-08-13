let url= `https://dog.ceo/api/breeds/image/random`

// returns a promise so we catch it by then and catch
// agar response successful huya then me jayga nhi to catch me jayega
fetch(url)
    .then((response)=>{
        console.log("Promise resolved",response);
    })
    .catch((err)=>{
        console.log("Promise rejected",err);
    })
