let btn = document.getElementById("btn");
let li = btn.querySelectorAll("li")
// console.log(li[0].innerHTML)

let result = document.getElementById("result");
console.log(result.innerHTML)

for(let i =0;i<li.length;i++){
        li[i].addEventListener("click",function(){
         
        if(li[i].innerHTML=="="){
            result.innerHTML=  eval(result.innerHTML)
        } else if (li[i].innerHTML=="c") {
            result.innerHTML =""
            
        }  
        else{
            result.innerHTML+=li[i].innerHTML
        }
 })
}