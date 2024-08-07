let Array= [1,2,3,4,5,6,7,8,9]
console.log(Array);

console.log(Array.length)
console.log(Array[5]);

// updating
// Array[2]=300;
console.log(Array);

// console.log(typeof Array); Object

// converting array to string
console.log(Array.toString());

// pop  in list
// console.log(Array.pop());

//push
// Array.push("shubham")
console.log(Array);

// shift-pick first element of the array and stored it
// console.log(Array.shift());

// unshift- add element at the beginning
// Array.unshift("Jack")
console.log(Array);

// delete

delete Array[5]
console.log(Array);

// if we display the element which is deleted then the answer is undefined
console.log(Array[5]);
// undefined
console.log(Array.length);
// memory is allocated but the element is deleted 


// list concat

// a=["heaven", "Earth", "hell"]
// b=["Zeus","Mha" , "gojo"]
// d=Array.concat(a,b)
// console.log(d);

// splice
// n=Array.splice(2,6)
// console.log(Array);
// console.log(n);

// reverse
// l=Array.reverse()
// console.log(l);


// loops in arrays

let m = ["gojo", "megumi", "yuji", "yuta","nanami"]
// for (let index = 0; index < m.length; index++) {
//     const element = m[index];
//     console.log(element);
// }


// use of for each
// m.forEach((value, index , arr)=>{
//     console.log(value,index, arr)
// })


let jjk={
    yuta:"rika",
    gojo: "Infinity",
    geto: "trauma"
}

// use of for in 
// for (const key in jjk) {
//     if (jjk.hasOwnProperty.call(jjk, key)) {
//         const element = jjk[key];
//         console.log(element);
//     }
// }

// using for of loop - list ki saari value fetch krdega without using any loop 
for (const iterator of m) {
    console.log(iterator);
}