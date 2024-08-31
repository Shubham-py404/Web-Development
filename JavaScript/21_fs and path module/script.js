const { error } = require("console");
const fs = require("fs")
// importing the module like python 
// or -- import fs from "fs/promises"
// console.log(fs);


// fs.writeFileSync("shubham.txt","hello")
// using fs module or a funtion to make and write in a file 

// console.log("ending");
// fs.writeFile("shubham.txt","shubham is a good boy",()=>{
//     console.log("done");
// })
// using writefile which made itself a function 


fs.writeFile("shubham.txt","shubham is a good ",()=>{
    console.log("done");
    fs.readFile("shubham.txt",(error , data)=>{
        console.log(error,data);
        // readfile 2 cheej deta hai err and data so data normalize. mai aata hai string ke liye ise toString use krna pdt hai 
    }) 
})

fs.appendFile("shubham.txt","nope",(e,d)=>{
    console.log(d);
})