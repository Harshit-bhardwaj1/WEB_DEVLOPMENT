let imgEl= document.querySelector('img')

let arrimg = [
    'https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1675826774817-fe983ceb0475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D'
]

let i=0;

let idd = setInterval(function(){
    imgEl.setAttribute('src',arrimg[i])
    i= (i+1)%arrimg.length
},2000)

// clear after 30 sec

setTimeout(function(){
    clearInterval(idd);
},30000)