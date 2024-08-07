// random color
// 1.red 
// 2.blue
// 3.green 


let r1= Math.ceil(Math.random()*255)
let r2= Math.ceil(Math.random()*255)
let r3= Math.ceil(Math.random()*255)
let r4= Math.ceil(Math.random()*255) 
let r5= Math.ceil(Math.random()*255)
let r6= Math.ceil(Math.random()*255)
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=`rgb(${r1}, ${r2}, ${r3})`
    e.style.color=`rgb(${r4}, ${r5}, ${r6})`
})