function download(){
    console.log("downlaod started");
    let res= true;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(res){
                resolve("download finished");
            }
            else{
                reject("unable to download");
            }
        }, 2000);
    })
}

function print(){
    console.log("print started");
    let res= true;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(res){
                resolve("print finished");
            }
            else{
                reject("unable to print");
            }
        }, 1000);
    })
}


function upload(){
    console.log("upload started");
    let res= true;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(res){
                resolve("upload finished");
            }
            else{
                reject("unable to upload");
            }
        }, 3000);
    })
}

download()
    .then((msg)=>{
        console.log(msg);
        return print();
    })
    .then((msg)=>{
        console.log(msg);
        return upload();
    })
    .then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })