

// using reduce
// let arr= [1,2,3,4,5,6,7]
// const multi = (a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(multi));

let n= Number(prompt("enter number"))
m=1
for (let i = 1; i <n+1; i++) {
    m=m*i
}
alert(m)
console.log(m);