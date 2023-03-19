let counterA=2;
let counterB=2;
const table=document.querySelector("table");
const input1=document.querySelector(".input1");
const input2=document.querySelector(".input2");
let text="";
function main(){
    text=""
counterA=input1.value
counterB=input2.value 
for(let i=0; i<counterA; i++){
    text+="<tr>";
    for(let i=0; i<counterB; i++){
    text+="<td>";
    text+="</td>";
    }
    text+="</tr>";
}
table.innerHTML=text;
}
input1.addEventListener("input",main);
input2.addEventListener("input",main);
main();