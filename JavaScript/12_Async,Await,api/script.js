// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('hello world');
//             resolve(455)
//         },3000)
//     })
// }




// async-  async function promise return krta hai basically jb tk promise kam kr rha hai yeh use backround mai run hone deta hai hai aur jo baaki command jaise console log unhe kaam krne deta hai promise ke aane ka wait nhi krta 

// async function main() {
//     console.log("loading modules");
//     console.log("do something else");
//     console.log("hello");
    
//     let data = await getData()
//     console.log("await funtion active");
//     console.log("task 2");
// }

// main()

// await - run hone ke baad jo async function ke console hai wo run honge lekin jo await ke andar hai wo promise function get data waale ke execute hone ke baad run honge 

// using api(application programming interface)-ye multiple software ko communicate krne mai kaam krta hai yeh ek broker btw api server and the client




async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    // x.json se java script object milta hai 
    console.log(data);
    return 455
}

async function main() {
    console.log("loading modules");
    console.log("do something else");
    console.log("hello");
    
    let data = await getData()
    console.log("await funtion active");
    console.log("task 2");
}

main()

// settle- ab promise ke andar hemane 2 chije phdi resolve and reject 
// resolve - promise has settled
// reject - promise is not settled


