a = await fetch("http://127.0.0.1:5500/17_SPOTIFY/audio/")
// this function can fetch files or date from index.html files and read data and can store to the variable


let response = await a.text();
// text feature can convert the links into text to make 
// a display or just for storing the value or takes a response and resolves in string

let as= div.getElementsByTagName("a")
// this func targets the tag  a means link tag 

element.href.endsWith(".mp3")
// this helps link ends with some var and return that val 


// pad start- 
let text = "5";
// 5 se string end hogi baaki jo bhi 3 spot hai unhe x fill krdega 
                             let a  = text.padStart(     4               ,                  "x"          );
                                            // length of string needed               u can fill the length space with variable 
// if text contains - 56 so it will xx56 , x jgha 4 ke andar hee lega 
// output- xxx5


// replace and replace all 
song="he/h/ghf/"
h= song.replace("/","%")
// replace only first element 
console.log(h); 
i = song.replaceAll("/","%")
console.log(i);
 

// trim - 
let str = "     heelloo     "
// it romoves the white space around the string 
// if there is a space btw words , it will not remove the space btw them 
console.log(str);
console.log(str.trim());-- heelloo


//target and currentTarget
// agr div2 ke andar div1 hai and dono ke addEventListener hai toh andar waale pe click hone  se bhaar waala bhi click hoga 
// to target show krega div1 and  currenttarget div 2 show krega kyoki wo bahaar tha and wo bhi trigger hua 
// if div 2 nhi hota toh currentTarget bhi div 1 hota 


// for each -
// ye function array ke saath kaam krta hai ise ek funciton chahiye perform krne ke liye 
let arr = [1,2,3,4]
 arr.forEach((item, index )=>{
    console.log(item);
})

// just like for loop ye bhi arr ke element(item) unke index ko ek ek krke function mai bhejta hai 
    
// stopPropagation-
// jb div ke andar div hota hai toh 2nd linstner active na ho isliye use hota hai yeh 
e.addEventListener("click",event=>{
    event.stopPropagation()
})


// closest- 
// let folder = e.closest('.card').dataset.folder;
// yeh apne sbse nearest card ke folder ko access krega ga mtlb agr sbki class same hai hai toh closes usko lega jo uske attribute ke sbse pass hai -
document.querySelector(".hell").closest(".card")