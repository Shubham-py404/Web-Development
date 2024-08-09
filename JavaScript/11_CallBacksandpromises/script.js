console.log("shubham");
console.log("bansal");


setTimeout(() => {
    console.log("his is time out");
}, 2000);

console.log("yeh timeout se phele aayega bcos of js property ");

const callback  = (arg)=>{
    console.log(arg);
}
const loadScript = (src,callback)=>{
    let sc= document.createElement("script")
    sc.src = src;
    sc.onload = callback("shubham")
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

   


