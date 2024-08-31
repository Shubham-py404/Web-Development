import path from "path"
// console.log(path);

let mypath;
mypath ="c:\\Users\\bHUMI\\Desktop\\Web Dev\\JavaScript\\shubham.txt"
console.log(path.extname(mypath));
// jo file target hai uski extention bta dega 

console.log(path.dirname(mypath))
// isne shubham.txt jis file ke andar hai mtlb js uska path return kr dia

console.log(path.basename(mypath));
// extention ke saath fie ka naam bta dega 




console.log(path.join("c:/","programs\\shubham.txt"));
// ye join krdega dono path 