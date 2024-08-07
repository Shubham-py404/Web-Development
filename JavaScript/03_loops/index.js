console.log("tutorial on loops")

let a = 1;

console.log();
// there are 5 types of loops 

// for loop  ,for each, for in loop ,   for of loop , while loop ,  do while loop 

// for (let i = 1; i < 100; i++){
//     console.log(a+i);
// }
// i++ means i+=1
// we can choose any variable instead of index
// let obj={
//     name:"shubham",
//     class:"12th",
//     roll: 32
// }
// for in loop 
// this line will fetch keys in key const  (only key)
// for (const key in obj) {
//         const element = obj[key];
//         console.log(element);
// }

// While loop
let i = 1;
while (i<6) {
    console.log(i);
    i+=1
}


// While loop 
let y = 56;
let u = 0;
do {
    y+=1
    u++;
    console.log(u);
} while (y<76);