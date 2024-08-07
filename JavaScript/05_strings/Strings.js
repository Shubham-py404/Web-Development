console.log("this is string double quoted");

let a = "hell";
// string indexing
console.log(a[0]);
console.log(a[1]);
console.log(a[3]);
// console.log(a[5]); undefined

console.log(a.length);


// concatenation
let name="shubham"
let friend="harry"
console.log("his name is "+ name + " and his friend name is ", friend)

// without concatenate
console.log(`his name is ${name} and his friends name is ${friend}`)


// upper case
let b="Shubham"
console.log(b.toUpperCase());
console.log(b.toLowerCase()); 
console.log(b.length);
  
// using slice(slicing)
console.log(b.slice(0,5));

// using replace
console.log(b.replace("Sh",77))
// if there is ShubhamSh then forst sh will be replaces

// another concatenate
console.log(b.concat(a,"kill"));

// using trim
let h = " hello "
console.log(h.trim());


console.log(h.charAt(1));