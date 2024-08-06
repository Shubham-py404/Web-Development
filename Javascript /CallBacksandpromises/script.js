console.log("shubham");
console.log("bansal");


setTimeout(() => {
    console.log("his is time out");
}, 2000);

console.log("yeh timeout se phele aayega bcos of js property ");

const callback  = 
const loadScript = (src,callback)=>{
    let sc= document.createElement("script")
    sc.src = src;
    sc.onload = callback("shubham")
}