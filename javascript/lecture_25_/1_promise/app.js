function fun(){
    let condn = true;
    return new Promise((resolve,reject)=>{
        if(condn){
            resolve("success");
        }
        else{
            reject("failure");
        }
    })
}

fun()
    .then((msg)=>{
        console.log("you are in then", msg);
    })
    .catch((msg)=>{
        console.log("you are in catch", msg);
        
    })



//  isme jo msg return kar rahe  h wo ek resolve ki tarah jaa raha h agle then me isiliye wo agla then chal raha h.
//  agar msg error aa jata h to catch me chala jayega. 
fun()
    .then((msg)=>{
        console.log("you are in 1st then", msg);
        return msg;
    })
    .then((msg)=>{
        console.log("you are in 2nd then", msg);
    })
    .catch((msg)=>{
        console.log("you are in catch", msg);
        
    })
    .finally(()=>{
        console.log("you are in .finally");
        
    })