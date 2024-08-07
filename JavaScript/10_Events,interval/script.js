let button = document.getElementById("btn")
// getting button attribute

// types of evenets in mdn reference
https://developer.mozilla.org/en-U S/docs/Web/Events

// button.addEventListener("click",()=>{
//     alert("the button is active")
// })
// adding event in the button /

button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML= "<b>the button is clicked</b>"
})

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML='this is double click'
})

button.addEventListener("contextmenu",()=>{
   alert("dont click")
})

console.log("shubham");

let cont = document.getElementById("btn")


button.addEventListener("contextmenu", ()=>{
     alert("dont click it ")
})
// works with right click 

document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode);
})
// gives the key which pressed and their key coe

document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode);
})