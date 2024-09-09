// generate  a  dummy data in this format in a 
//collection  called employess in a db called company



// {
//     name:"shubham",
//     salary: 4656565,
//     language: "python",
//     :a[f]: "",
//     isManager :true
// }
 
// generate 10 such record when a button called generate data is clicked 


// use('ExGenerate')
// db.createCollection("Generate_data")



function generat() {
    let f = Math.floor(Math.random()*4)
    let g = Math.floor(Math.random()*4)
    let h = Math.floor(Math.random()*4)
    let i = Math.floor(Math.random()*4)
    let j = Math.floor(Math.random()*2)
    let a= ['shubham','harry','gojo','doremon']
    let b= [45000,50000,40000,55000]
    let c = ['python','javaScript','c++','mernstack']
    let d= ['delhi','Mumbai','bangalore','punjab']
    let e= ['true','false']
    let kl={name:a[f],salary: b[g],language: c[h],city:d[i],isManager :e[j]}
    console.log(kl);
}



document.querySelector(".button").addEventListener("click", () => {
    generat()
});
document.querySelector(".delete").addEventListener("click", () => {
    alert("item deleted")    
});