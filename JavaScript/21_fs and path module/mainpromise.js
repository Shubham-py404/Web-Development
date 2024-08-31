import fs from "fs/promises"

// let a=await fs.readFile("shubham.txt")
// we dont need async under this module
// console.log(a.toString());

let b = await fs.writeFile("shubham.txt","/this \n is awesome")
let a=await fs.readFile("shubham.txt")
console.log(a.toString());