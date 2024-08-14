// parseInt use.\

let a = prompt("enter no.")
let b  = prompt("enter the sec num.")
if (isNaN(a)|| isNaN(b)) {
    throw SyntaxError("enter number u dumbb")
    // making an error 
}
// we already know it will concat but if we use parseInt it sums 


sum = parseInt(a) + parseInt(b)
alert(sum)

try{
    console.log('the sum is ',sum*x);
    
}catch(error){
    console.log("error aagya bhai ");
}
finally{
    console.log("files are being closed and db connection is being closed  ");
    
}
// try and catch- ye tb kaam krega jb throw execute nho hoga, mtlb simple sum hone ke baad 
// bhi ye try ke andar ek wrong syntax ko run krega jisse error aayega and catch execute hoga 
// finally - finally hamesha run hoga even error aaye ya nhi toh iska main kaam function mai hai jb hum kuch return 
// krnege toh niche ke syntax kaam nhi krte ya uske baad waale return nhi krenge but finally hamesha kam krega iska main kaam function mai hee hota hai 