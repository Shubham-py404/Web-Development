let arr = [1,3,11,5,13]
let newar = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newar.push(element**2)
    
// }
 
// shorter mthod - using map
let newArr = arr.map((e,index,array)=>{
    return e**2
})
console.log(newArr);



// using filter- ye list ko function mai insert krta hai aur jo return hoga use list mai display kr dega 

const greaterThanSeven = (e)=>{
    if (e>7){
      return true
    }
    return false
};
console.log(newArr.filter(greaterThanSeven))


// reduce method- jb hume kist nhi pur ek sum ya total output chahiye hota hai mutlb jisme 
// koi condition na ho bs elements ko change kre ya add sub or multi krde toh filter ki jgha reduce use hoga

let arr1 = [1,2,3]
function red  (a,b ){
   return a+b
}
red()
console.log(arr1.reduce(red));


// using from (important)-  create array from other String
let kl = "shubham "
m= Array.from(kl)
console.log(m);
