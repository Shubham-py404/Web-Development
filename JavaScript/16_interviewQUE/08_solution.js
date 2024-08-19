let arr = [1,2,3,4,5,6]
let vov= new Promise((resolve, reject) => {
    let arr2 =[]
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            setTimeout(() => {
                arr2.push(element*2) 
                console.log(arr2); 
            }, 500);             
        }
       resolve()
})

vov.then(()=>{
})