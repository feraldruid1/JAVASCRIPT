let h1=document.querySelector("h1");
let button=document.querySelector("button");
let body=document.querySelector("body")
function randomone(){
    return Math.floor(Math.random()*255);
}
function giveinner(){
    h1.innerHTML="RGB"+"("+randomone()+","+randomone()+","+randomone()+")"
    body.style.backgroundColor=h1.innerHTML
}
button.addEventListener("click",giveinner);
