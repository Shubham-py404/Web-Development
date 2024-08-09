// promises
alert('shubham');

console.log('shubham is good ');
// we made a snippets(short cuts ) clog execute console.log('');

console.log('starting promises ');
 


let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if (a<0.5) {
        reject("no random number was not supporting ")
    }
    // if we have to neglect the request then we use reject
    else{
        setTimeout(() => {
            console.log('yes its working');
            resolve("shubham ")
        }, 2000);
    }
})
// resolve- yeh ek network request ka wait krta hai yaone koi kaam hone ka jaise hee wo kaam hojaata hai ye is execute krdia jaata hai  function ki trha 
// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log("err"); 
// })
// yeh usko execute krta hai 

// after we added reject funtion it gives an error 50% of the 
// catch agr error aata hai toh hum error ki jgha kuch aur print kr sjte hai jaise err

// read notes usme bhot kuch hai 
let prom2= new Promise((resolve,reject)=>{
    let a = Math.random();
    if (a<0.5) {
        reject("no random number was not supporting2 ")
    }
    // if we have to neglect the request then we use reject
    else{
        setTimeout(() => {
            console.log('yes its working2');
            resolve("shubham ")
        }, 1000);
    }
})

let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log("err"); 
})
// gives the output of all promises 

// Promise.race - isse hum multiple api ya promises mai se jo sbse phele load hoga wo show hoga suppose multiple link ek imag ke 